import time

from flask import Flask, render_template, request, jsonify
import grpc
from studentRegister_pb2_grpc import registerStub

app = Flask(__name__)
channel = grpc.insecure_channel("register:50052")
client = registerStub(channel)
from studentRegister_pb2 import (
    Request,
    Response,
)

@app.route('/')
def view():
    return 'What up enrollment-app backend! '

@app.route('/student/<name>')
def post(name):
    request = Request(
    userName=name, password='testpassword',firstName='Tamzid', lastName='Ahmed')
    response = client.register(request)
    print(response)
    return 'THANK YOU: ->' + str(response)
