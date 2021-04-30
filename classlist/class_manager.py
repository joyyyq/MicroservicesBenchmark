from selenium import webdriver
from bs4 import BeautifulSoup
import pymongo
import json
import pprint
import urllib.request
import time
import requests
import random
from concurrent import futures

import grpc

from classList_pb2 import (
    classListRequest,
    classListResponse,
    Class, 
    Section, 
    Time
)
import classList_pb2_grpc

client = pymongo.MongoClient("classlist_db",27017)
# client = pymongo.MongoClient("localhost",27018)
db = client.classlist

class classlistService(
    classList_pb2_grpc.classlistServicer
):
    def getClassList(self, request, context):
        print("HELLLO")
        db.hello.insert_one({"count": 5})
        classes = []
        for class_ in db.classInfo.find({}):
            temp_class = {}
            temp_class['title'] = class_['titles'] 
            temp_class['code'] = class_['course_code'] 
            temp_class['subject'] = class_['subject'] 
            temp_class['nbr'] = class_['nbr'] 
            sections = [] 
            for section_ in class_['course_info']:
                temp_section = {}
                temp_section['title'] = section_['section']
                temp_section['number'] = section_['class_numbers']
                temp_section['instructors'] = section_['instructors']
                temp_section['days'] = section_['days']
                times = section_['times'].split(" ")
                temp_section['times'] = {'start': times[0], 'end': times[-1] }
                sections.append(
                    Section(title=temp_section['title'],number=temp_section['number'], 
                    instructors=temp_section['instructors'], days=temp_section['days'], 
                    times=temp_section['times']
                ))

            classes.append(Class(title=temp_class['title'],code=temp_class['code'], 
                    subject=temp_class['subject'], nbr=temp_class['nbr'], 
                    sections=sections
                ))

        return classListResponse(classes=classes)

# loads only spring 21 classes
TOTAL_ECE_CLASSES=0
base_url = "https://classes.cornell.edu/browse/roster/SP21/class/ECE/"
page = urllib.request.urlopen("https://classes.cornell.edu/browse/roster/SP21/subject/ECE")
soup = BeautifulSoup(page,'html.parser')

titles = []
instructors = []
section = []
course_code = [] #  ECE 120
descriptions = []
data_catalog_nbr =[]  # number part 1210
data_subject = []    # subject field ECE
class_numbers = []    # unique number 34343
credit = [] # 3 credits
times = [] # 6-9
days = [] # M-W

def init_credits(): 
    # hard coding credits as I had difficulty grabbing the data
    for x in range(54):
        if (x==0 or x==7 or x==9 or x==13 or x==15 or x==19 or x==23 or x==30 or x==31 or x==32 or x==34 or x==39):
            credit.append(3)
        else:
            credit.append(4)

def scrape_num_class():
    node = soup.find_all('div',attrs={'id': 'class-subject-listing'})[0]
    num = node.select("p > span")[0]
    return int(num.string)

def scrape_classes():
    i = 0
    for node in soup.find_all('div',attrs={'role': 'region'}):
        i+=1
        if ( i > TOTAL_ECE_CLASSES ):
            break
        if ( node.find(class_="secondary-section" ) ):
            continue
        code = node['aria-label'][7:len(node['aria-label'])] # ECE 1210
        subject = node['aria-label'][7:10] # ECE
        nbr = node['aria-label'][11:15] # 1210
        new_url = base_url + nbr
        new_page = urllib.request.urlopen(new_url)
        new_soup = BeautifulSoup(new_page,'html.parser')
        description = new_soup.find('p',class_='catalog-descr').text.strip()
        descriptions.append(description)
        # print(description)
        course_code.append(code)
        data_subject.append(subject)
        data_catalog_nbr.append(nbr)
        title = []
        for titl in node.select("h3 > div[class='title-coursedescr'] > a"):
            title.append(titl.string)
            #print(titl.string)
        titles.append(title)


        section_1 = []
        for sec in node.select("div > div > ul[class='section section-last'] "):
            #print (sec['aria-label'])
            section_1.append(sec['aria-label'][14:len(sec['aria-label'])])
        for sec in node.select("div > div > ul[class='section'] "):
            #print (sec['aria-label'])
            section_1.append(sec['aria-label'][14:len(sec['aria-label'])])
        section.append(section_1)
        instructor = []
        for inst in node.select("div > div > ul[class='section section-last']> li[class='meeting-pattern'] > ul[class='meetings meetings-first'] > li[class='instructors'] > p > span[class='tooltip-iws']"):
            instructor.append(inst['data-content'])
            #print(inst['data-content'])
        for inst in node.select("div > div > ul[class='section']> li[class='meeting-pattern'] > ul[class='meetings meetings-first'] > li[class='instructors'] > p > span[class='tooltip-iws']"):
            instructor.append(inst['data-content'])
        instructors.append(instructor)
        time = []
        for tim in node.select("div > div > ul[class='section section-last']> li[class='meeting-pattern'] > ul[class='meetings meetings-first'] > li[class='dates'] > span[class='pattern'] > time[class='time']"):
            time.append(tim.string)
            #print(tim.string)
        for tim in node.select("div > div > ul[class='section']> li[class='meeting-pattern'] > ul[class='meetings meetings-first'] > li[class='dates'] > span[class='pattern'] > time[class='time']"):
            time.append(tim.string)
            #print(tim.string)
        if (len(time) != len(section_1)):
            #print(len(section_1)-len(time))
            for t in range(0,len(section_1)-len(time)):
                time.append("None")
        times.append(time)
        day = []
        for da in node.select("div > div > ul[class='section section-last']> li[class='meeting-pattern'] > ul[class='meetings meetings-first'] > li[class='dates'] > span[class='pattern'] > span[class='pattern-only'] > span[class='tooltip-iws']"):
            day.append(da.string)
            #print(da.string)
        for da in node.select("div > div > ul[class='section']> li[class='meeting-pattern'] > ul[class='meetings meetings-first'] > li[class='dates'] > span[class='pattern'] > span[class='pattern-only'] > span[class='tooltip-iws']"):
            day.append(da.string)
            #print(da.string)
        days.append(day)

        class_number = []
        for class_num in node.select("div > div > ul[class='section section-last']> li[class='class-numbers'] > p > strong[class='tooltip-iws']"):
            class_number.append(class_num.string)
            #print(inst['data-content'])
        for class_num in node.select("div > div > ul[class='section']> li[class='class-numbers'] > p > strong[class='tooltip-iws']"):
            class_number.append(class_num.string)
        class_numbers.append(class_number)


'''
    classlist:
        -> classInfo: all the classes with their info 
        -> classCounts: the latest number of classes pulled from the site. 
'''
def update_db():
    data = {}
    # insert into db
    for j in range(0,TOTAL_ECE_CLASSES):
        data["titles"] = titles[j][0]
        data["course_code"] = course_code[j]
        data["subject"] = data_subject[j]
        data["nbr"] = data_catalog_nbr[j]
        data["credit"] = credit[j]
        data["description"] = descriptions[j]
        course_info = []
        for k in range(0,len(section[j])):
            new_course = {}
            new_course["section"] = section[j][k]
            new_course["class_numbers"] = class_numbers[j][k]
            new_course["times"] = times[j][k] if ( len(times[j]) >= k-1 ) else "None"
            new_course["days"] = days[j][k]
            new_course["instructors"] = instructors[j][k]
            course_info.append(new_course)
        data["course_info"] = course_info
        data["size"] = 10
        db.classInfo.insert_one(data)
        data = {}
    
    # insert the total number of classes 
    db.classCounts.insert_one({'count': len(data_subject)})

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=20))
    classList_pb2_grpc.add_classlistServicer_to_server(
        classlistService(), server
    )
    server.add_insecure_port("0.0.0.0:5002")
    server.start()
    server.wait_for_termination()

if __name__ == "__main__":
    TOTAL_ECE_CLASSES=scrape_num_class()
    if ( db.classCounts.count_documents({}) != TOTAL_ECE_CLASSES ):
        # Always reset 
        db.classInfo.delete_many({})
        # Run 
        init_credits()
        scrape_classes()
        update_db()
    
    serve()