FROM python:3.8
WORKDIR /class_scraping

#INSTALL Python 3
RUN apt-get update && apt-get install -y python3 python3-pip
RUN apt-get -y install python3.7-dev
RUN pip3 install selenium
RUN pip3 install bs4
RUN pip3 install pymongo
RUN pip3 install requests

COPY . .
CMD ["python", "./scrape.py"]