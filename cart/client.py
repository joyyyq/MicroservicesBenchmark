import grpc
from studentCart_pb2_grpc import cartStub
channel = grpc.insecure_channel("localhost:5003")
client = cartStub(channel)
from studentCart_pb2 import (
    classRequest,
    classResponse,
)
request = classRequest(
courseCode="ECE 4840", section = "LEC 001")
response = client.addClass(request)
print(response)
