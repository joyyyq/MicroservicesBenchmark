from selenium import webdriver
from bs4 import BeautifulSoup
from scipy.stats import describe
from sklearn.feature_extraction.text import CountVectorizer
import re
import requests
import csv
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from prof_links import *

from prof_pb2 import (
    profRequest,
    profResponse,
    Professor
)
import prof_pb2_grpc

client = pymongo.MongoClient("prof_db",27020)
db = client.prof

class profService(
    prof_pb2_grpc.proflistServicer
):
    def getProf(self, request, context):
        # db.hello.insert_one({"count": 5}) # What is this doing?
        prof_ = db.profInfo.find({'name'=request.name}):
        # temp_prof = {} # TODO: is temp_prof necessary? don't think so
        # temp_prof['name'] = prof_['name'] # should be the same as request.name
        # temp_prof['rating'] = prof_['rating'] 
        # temp_prof['wouldTakeAgain'] = prof_['wouldTakeAgain'] 
        # temp_prof['levelOfDifficulty'] = prof_['levelOfDifficulty'] 
        # temp_prof['reviews'] = str(prof_['reviews'])
        # temp_prof['numReviews'] = prof_['numReviews']
        similar_profs = []
        for similar_prof_ in prof_['similarProfs']:
            temp_prof = {}
            temp_prof['rating'] = prof_['section']
            temp_prof['name'] = prof_['name']
            temp_prof['link'] = prof_['link']
            similar_profs.append(Professor(rating=temp_prof['rating'],name=temp_prof['name'],link=temp_prof['link']))

        # return profResponse(name=temp_prof['name'],rating=temp_prof['rating'], 
        #             wouldTakeAgain=temp_prof['wouldTakeAgain'], levelOfDifficulty=temp_prof['levelOfDifficulty'], similarProfs=temp_prof['similarProfs'], reviews=temp_prof['reviews'], numReviews=temp_prof['numReviews']
        #         ))
        return profResponse(name=prof_['name'],rating=prof_['rating'], 
                    wouldTakeAgain=prof_['wouldTakeAgain'], levelOfDifficulty=prof_['levelOfDifficulty'], similarProfs=prof_['similarProfs'], reviews=prof_['reviews'], numReviews=prof_['numReviews']
                ))

base_url = "https://www.ratemyprofessors.com/"

def scrape_profs():
    csv_file = open("prof.csv", "w", encoding='utf-8')
    csv_writer = csv.writer(csv_file)
    csv_writer.writerow(['name', 'rating', 'wouldTakeAgain', 'levelOfDifficulty', 'topTags', 'similarProfs', 'reviews', 'numReviews'])

    br = webdriver.Firefox()

    url_list = prof_list
    for url in url_list:
        br.get(url)
        html = br.page_source
        soup = BeautifulSoup(html, "lxml")

        try:
            name = soup.find('div', class_="NameTitle__Name-dowf0z-0 cfjPUG").text.strip()
        except:
            name = "N/A"

        try:
            rating = soup.find('div', class_="RatingValue__Numerator-qw8sqy-2 liyUjw").text.strip()
        except:
            rating = "N/A"

        try:
            wouldTakeAgain = soup.findAll('div', class_="FeedbackItem__FeedbackNumber-uof32n-1 kkESWs")[0].text
        except:
            wouldTakeAgain = "N/A"
        
        try:
            levelOfDifficulty = soup.findAll('div', class_="FeedbackItem__FeedbackNumber-uof32n-1 kkESWs")[1].text
        except:
            levelOfDifficulty = "N/A"

        try:
            top_tags = soup.findAll('span', class_="Tag-bs9vf4-0 hHOVKF")
            top_tags = [tag.text.strip() for tag in top_tags]
        except:
            top_tags = []

        try:
            similar_profs = []
            similar_profs_ul = soup.find('ul', class_="SimilarProfessors__StyledSimilarProfessorsList-zg1hrt-1 byOnik")
            similar_profs_li = similar_profs_ul.findAll('li')
            for prof in similar_profs_li:
                href = base_url + prof.find('a')['href']
                prof_rating = prof.findAll('span')[0].text
                prof_name = prof.findAll('span')[1].text
                similar_prof = []
                similar_prof.append(prof_rating)
                similar_prof.append(prof_name) 
                similar_prof.append(href)
                similar_profs.append(similar_prof)
        except:
            similar_profs = []              

        try:
            reviews_lst = soup.findAll('div', class_="Comments__StyledComments-dzzyvm-0 gRjWel")[1:]
            stripped_reviews_lst = [r.text.strip() for r in reviews_lst]
            reviews = '; '.join(stripped_reviews_lst)
            num_reviews = len(reviews_lst)
        except:
            reviews = "N/A"
            num_reviews = 0

        csv_writer.writerow([name, rating, wouldTakeAgain, levelOfDifficulty, top_tags, similar_profs, reviews, num_reviews])

    csv_file.close()
    return stripped_reviews_lst

def get_terms_and_TFs(data):
    # TODO: improve on getting rid of useless common words such as class, prof. 
    # current way is to set a max ratio threshold like .8 with scope per prof
    # need to incorporate global info
    vectorizer = CountVectorizer(stop_words='english')
    doc_term_TF_matrix = vectorizer.fit_transform(data).toarray()
    term_doc_TF_matrix = doc_term_TF_matrix.T

    # TF <=> term frequency <=> number of documents each term is in
    terms_TF = np.sum(term_doc_TF_matrix, axis=1)
    terms = vectorizer.get_feature_names()
    num_docs = len(data)
    terms_TF_lst = terms_TF.tolist()
    useful_terms = [terms[i] for i in range(num_docs) if terms_TF_lst[i] < 0.5 * num_docs]
    return (useful_terms, terms_TF[terms_TF < 0.5 * num_docs])

def produce_plot(data, terms, terms_TF):
    terms_terms_TF_tuple = list(zip(terms, terms_TF))
    terms_terms_TF_tuple_sorted = sorted(terms_terms_TF_tuple, key=lambda x: -x[1])
 
    num_top_terms = 20
    # reverse the array so bars are from longest to shortest in the plot
    top_terms_and_term_counts = terms_terms_TF_tuple_sorted[:num_top_terms][::-1]
    top_term_counts = [term_and_count[1] for term_and_count in top_terms_and_term_counts]
    top_terms = [term_and_count[0] for term_and_count in top_terms_and_term_counts]

    # TODO: store and render plot in prof's page
    plt.rc('ytick', labelsize=5)
    plt.barh(top_terms, top_term_counts)
    plt.xlabel("Term Frequency")
    plt.ylabel("Top Terms")
    plt.title("RateMyProfessor Rating Comment Term Frequencies of the Top " + str(num_top_terms) + " Terms")
    plt.show()
    return top_terms

'''
    proflist:
        -> profInfo: all the professors with their info 
        -> profCounts: the latest number of profs pulled from the site. 
'''
def update_db():
    profs = csv.DictReader(open("prof.csv"))
    for prof in profs:
        data = {}
        data["name"] = prof["name"]
        data["wouldTakeAgain"] = prof["wouldTakeAgain"]
        data["levelOfDifficulty"] = prof["levelOfDifficulty"]
        data["topTags"] = prof["topTags"]
        data["similarProfs"] = prof["similarProfs"]
        data["reviews"] = prof["reviews"]
        data["num_reviews"] = prof["num_reviews"]
        db.profInfo.insert_one(data)
    db.profCounts.insert_one({"count": len(list(profs))})

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=20))
    prof_pb2_grpc.add_profServicer_to_server(
        profService(), server
    )
    server.add_insecure_port("0.0.0.0:5004")
    server.start()
    server.wait_for_termination()

if __name__ == "__main__":
    TOTAL_ECE_PROFS=29 # Hard coded for now cause not all prof has a RMP page
    if ( db.profCounts.count_documents({}) != TOTAL_ECE_PROFS ):
        db.profInfo.delete_many({}) # Always reset 
        # Run
        init_credits()
        scrape_profs()
        update_db()
    
    serve()

# def main():
#     data = get_data()
#     # print(len(data))
#     # (terms, terms_TF) = get_terms_and_TFs(data)
#     # top_terms = produce_plot(data, terms, terms_TF)
#     # print(top_terms)

# if __name__ == "__main__":
#     main()
