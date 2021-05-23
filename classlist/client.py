import grpc
import time
import threading
import sys

from classList_pb2_grpc import classlistStub
channel = grpc.insecure_channel("localhost:5002")
client = classlistStub(channel)
from classList_pb2 import (
    classListRequest,
    classListResponse,
    Class, 
    Section,
    Time,
)
num_requests = int(input('number of threads: '))
print(num_requests)
times = [0]*num_requests
threads = []

def get_response(thread_idx):
    individual_start = time.time()
    request = classListRequest(year='')
    response = client.getClassList(request)
    individual_end = time.time()
    times[thread_idx] = individual_end - individual_start

# try:
start = time.time()
for i in range(num_requests):
    temp = threading.Thread(target=get_response, args=(i,))
    threads.append(temp)
    temp.start()
# except:
#     print('Error')

for t in threads:
    t.join()
end = time.time()
elapse = end - start
print('start: ', start)
print('end: ', end)
print('elapse: ', elapse)
print(times)