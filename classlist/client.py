import grpc
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
request = classListRequest(year='')
response = client.getClassList(request)
print(response)
