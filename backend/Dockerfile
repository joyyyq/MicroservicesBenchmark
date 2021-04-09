FROM python:3.8
WORKDIR /backend
ENV FLASK_APP=backend.py 
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=5001

#RUN apt-get update && apt-get install -y python3 python3-pip
#RUN apt-get -y install python3.7-dev

#RUN pip3 install pymongo
#RUN pip3 install grpcio
#RUN pip3 install google-cloud
#RUN pip3 install google-cloud-vision
#RUN pip3 install py-bcrypt
# RUN apk add --no-cache gcc musl-dev linux-headers
#COPY requirements.txt requirements.txt
#RUN pip install -r requirements.txt

EXPOSE 5001
COPY . .
CMD ["flask", "run"] 