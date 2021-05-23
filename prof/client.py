"""For local test"""
import grpc
import time
import threading
import sys

from prof_pb2_grpc import profStub
channel = grpc.insecure_channel("localhost:5004")
client = profStub(channel)
from prof_pb2 import (
    profRequest,
    profResponse,
    profListRequest,
    profListResponse,
    Professor,
)

num_requests = int(input('number of threads: '))
print(num_requests)
times = [0]*num_requests
threads = []

def get_response(thread_idx):
    individual_start = time.time()
    request = profListRequest()
    response = client.getProfList(request)
    individual_end = time.time()
    times[thread_idx] = individual_end - individual_start

start = time.time()
for i in range(num_requests):
    temp = threading.Thread(target=get_response, args=(i,))
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

# request = profRequest(name='Christina Delimitrou')
# response = client.getProf(request)
# print(response)
