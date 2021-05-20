"""For local test"""
import grpc
from prof_pb2_grpc import profStub
channel = grpc.insecure_channel("localhost:5004")
client = profStub(channel)
from prof_pb2 import (
    profRequest,
    profResponse
)
request = profRequest(name='Christina Delimitrou')
response = client.getProf(request)
print(response["topTags"])
