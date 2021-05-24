import grpc
import time
import threading
import sys

from studentRegister_pb2_grpc import registerStub
channel = grpc.insecure_channel("localhost:5001")
client = registerStub(channel)
from studentRegister_pb2 import (
    Request,
    Response,
)

# request = Request(
# userName='ta325678', password='testpassword', firstName='Tamzid', lastName='Ahmed')
# response = client.register(request)
# print(response)

num_requests = int(input('number of threads: '))
print(num_requests)
times = [0]*num_requests
threads = []

def get_register_data(thread_idx):
    individual_start = time.time()
    request = Request(
userName='a'+ str(num_requests * 77) + str(thread_idx), password='testpassword',firstName='b'+str(thread_idx), lastName='c'+str(thread_idx))
    response = client.register(request)
    individual_end = time.time()
    times[thread_idx] = individual_end - individual_start

start = time.time()
for i in range(num_requests):
    temp = threading.Thread(target=get_register_data, args=(i,))
    threads.append(temp)
    temp.start()

for t in threads:
    t.join()
end = time.time()
elapse = end - start
print('start: ', start)
print('end: ', end)
print('elapse: ', elapse)
print(times)
print('##########################')

def get_login_data(thread_idx):
    individual_start = time.time()
    request = Request(
userName='a'+ str(num_requests * 77) + str(thread_idx), password='testpassword')
    response = client.validatePassword(request)
    individual_end = time.time()
    times[thread_idx] = individual_end - individual_start

start = time.time()
for i in range(num_requests):
    temp = threading.Thread(target=get_login_data, args=(i,))
    threads.append(temp)
    temp.start()

for t in threads:
    t.join()
end = time.time()
elapse = end - start
print('start: ', start)
print('end: ', end)
print('elapse: ', elapse)
print(times)


