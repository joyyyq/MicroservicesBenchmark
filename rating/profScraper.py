from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import re
import requests
import csv
import time
from links_prof import *

url_list = url_list
# Csv writing setup

csv_file = open("prof.csv", "w", encoding='utf-8')
# csv_file = open("delimitrou.csv", "w", encoding='utf-8')
csv_writer = csv.writer(csv_file)
csv_writer.writerow(['name', 'rating', 'wouldTakeAgain', 'levelOfDifficulty', 'reviews'])

br = webdriver.Firefox()
for url in url_list:
    br.get(url)
    time.sleep(2)

    # br.execute_script("window.scroll(0, 1400);")
    # time.sleep(5)

    html = br.page_source
    soup = BeautifulSoup(html, "lxml")
# with open('delimitrou.html', 'r') as r:
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
        
    # try:
    #     review = soup.find('div', class_="Comments__StyledComments-dzzyvm-0 gRjWel").text.strip()
    # except:
    #     review = "N/A"
    try:
        reviews_lst = soup.findAll('div', class_="Comments__StyledComments-dzzyvm-0 gRjWel")[1:]
        stripped_reviews_lst = [r.text.strip() for r in reviews_lst]
        reviews = '; '.join(stripped_reviews_lst)
    except:
        reviews = "N/A"
    
    csv_writer.writerow([name, rating, wouldTakeAgain, levelOfDifficulty, reviews])

csv_file.close()
