from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
from scipy.stats import describe
from sklearn.feature_extraction.text import CountVectorizer
import re
import requests
import csv
import time
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from links_prof import *

def get_data():
    csv_file = open("prof.csv", "w", encoding='utf-8')
    csv_writer = csv.writer(csv_file)
    csv_writer.writerow(['name', 'rating', 'wouldTakeAgain', 'levelOfDifficulty', 'reviews'])

    br = webdriver.Firefox()

    url_list = prof_list
    for url in url_list:
        br.get(url)
        html = br.page_source
        soup = BeautifulSoup(html, "lxml")
    # with open('albonesi.html', 'r') as r:
        # soup = BeautifulSoup(r.read(), "lxml")

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
            reviews_lst = soup.findAll('div', class_="Comments__StyledComments-dzzyvm-0 gRjWel")[1:]
            stripped_reviews_lst = [r.text.strip() for r in reviews_lst]
            reviews = '; '.join(stripped_reviews_lst)
        except:
            reviews = "N/A"
        
        csv_writer.writerow([name, rating, wouldTakeAgain, levelOfDifficulty, reviews])

    csv_file.close()
    return stripped_reviews_lst

def get_terms_and_TFs(data):
    # TODO: get rid of useless top common words such as class, prof, etc. (current thought is set a max ratio threshold like .8)
    vectorizer = CountVectorizer(stop_words='english')

    doc_term_TF_matrix = vectorizer.fit_transform(data).toarray()
    term_doc_TF_matrix = doc_term_TF_matrix.T

    # TF <=> term frequency <=> number of documents each term is in
    terms_TF = np.sum(term_doc_TF_matrix, axis=1)
    terms = vectorizer.get_feature_names()
    return (terms, terms_TF)

def produce_plot(data, terms, terms_TF):
    terms_terms_TF_tuple = list(zip(terms, terms_TF))
    terms_terms_TF_tuple_sorted = sorted(terms_terms_TF_tuple, key=lambda x: -x[1])

    num_top_terms = 50
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

def main():
    data = get_data()
    (terms, terms_TF) = get_terms_and_TFs(data)
    produce_plot(data, terms, terms_TF)

if __name__ == "__main__":
    main()
