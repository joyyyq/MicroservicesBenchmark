"""For local test"""
import grpc
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
request = profRequest(name='Christina Delimitrou')
response = client.getProf(request)
print(response)

request = profListRequest()
response = client.getProfList(request)
print(response)

# for prof in response: 
#     print(prof["name"])
#     # if prof["name"] == "David Albonesi":
#     #     print("yes!")