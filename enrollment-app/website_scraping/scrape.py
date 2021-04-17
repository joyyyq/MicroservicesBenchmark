from selenium import webdriver
from bs4 import BeautifulSoup
import pymongo
import json
import pprint
#import pandas as pd
import urllib.request
import time
import requests
import random
client = pymongo.MongoClient("localhost",27017)
db = client.classlist
titles = []
instructors = []
section = []
course_code = [] #  ECE 120
data_catalog_nbr =[]  # number part 1210
data_subject = []    # subject field ECE
class_numbers = []    # unique number 34343
credit = [] # 3 credits
times = [] # 6-9
days = [] # M-W
page = urllib.request.urlopen("https://classes.cornell.edu/browse/roster/SP21/subject/ECE")
soup = BeautifulSoup(page,'html.parser')
# hard coding credits as I had difficulty grabbing the data
for x in range(54):
    if (x==0 or x==7 or x==9 or x==13 or x==15 or x==19 or x==23 or x==30 or x==31 or x==32 or x==34 or x==39):
        credit.append(3)
    else:
        credit.append(4)

data = {}
i = 0
for node in soup.find_all('div',attrs={'role': 'region'}):
    i+=1
    if ( i == 54 ):
        break
    if ( node.find(class_="secondary-section" ) ):
       continue
    code = node['aria-label'][7:len(node['aria-label'])] # ECE 1210
    subject = node['aria-label'][7:10] # ECE
    nbr = node['aria-label'][11:15] # 1210
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

for j in range(0,53):
    data["titles"] = titles[j][0]
    data["course_code"] = course_code[j]
    data["subject"] = data_subject[j]
    data["nbr"] = data_catalog_nbr[j]
    data["credit"] = credit[j]
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
    db.classInfo.insert(data)
    data = {}
print(data)

"""
#print(data_catalog_nbr)
#print(course_code)
#print(credit)
#print(data_subject)
#print(section)
#print(instructors)
#print(times)
#print(days)
#print(titles)
#print(class_numbers)
"""from selenium import webdriver
from bs4 import BeautifulSoup
import pymongo
import json
import pprint
#import pandas as pd
import urllib.request
import time
import requests
import random
client = pymongo.MongoClient("localhost",27017)
db = client.enrollment
titles = []
instructors = []
section = []
course_code = [] #  ECE 120
data_catalog_nbr =[]  # number part 1210
data_subject = []    # subject field ECE
class_numbers = []    # unique number 34343
credit = [] # 3 credits
times = [] # 6-9
days = [] # M-W
page = urllib.request.urlopen("https://classes.cornell.edu/browse/roster/SP21/subject/ECE")
soup = BeautifulSoup(page,'html.parser')
# hard coding credits as I had difficulty grabbing the data
for x in range(54):
    if (x==0 or x==7 or x==9 or x==13 or x==15 or x==19 or x==23 or x==30 or x==31 or x==32 or x==34 or x==39):
        credit.append(3)
    else:
        credit.append(4)

data = {}
i = 0
for node in soup.find_all('div',attrs={'role': 'region'}):
    i+=1
    if ( i == 54 ):
        break
    if ( node.find(class_="secondary-section" ) ):
       continue
    code = node['aria-label'][7:len(node['aria-label'])] # ECE 1210
    subject = node['aria-label'][7:10] # ECE
    nbr = node['aria-label'][11:15] # 1210
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

for j in range(0,53):
    data["titles"] = titles[j][0]
    data["course_code"] = course_code[j]
    data["subject"] = data_subject[j]
    data["nbr"] = data_catalog_nbr[j]
    data["credit"] = credit[j]
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
    db.classInfo.insert(data)
    data = {}
print(data)

"""
#print(data_catalog_nbr)
#print(course_code)
#print(credit)
#print(data_subject)
#print(section)
#print(instructors)
#print(times)
#print(days)
#print(titles)
#print(class_numbers)
"""