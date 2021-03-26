import time

import redis
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello World! I have been seen times.\n'

@app.route('/test')
def test():
    return render_template('test.html')