"""For local test"""
import grpc
from studentCart_pb2_grpc import cartStub
channel = grpc.insecure_channel("localhost:5003")
client = cartStub(channel)
from studentCart_pb2 import (
    classRequest,
    classResponse,
    cartRequest,
    cartResponse,
    section,
)
request = classRequest()
request.userName = "ta326"
request.courseCode = "ECE 3150"
request.sectionList.extend([section(sec="LEC 001"), section(sec="LAB 401")])
#request.sectionList.sec.extend(["LEC 001", 'LAB 401'])
response = client.addClass(request)
print(response)
cart_request = cartRequest(userName = "ta326")
cart_response = client.getCart(cart_request)
print(cart_response)