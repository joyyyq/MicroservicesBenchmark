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
# request = classRequest(
# userName= "ta326" ,courseCode="ECE 2300", section = "LEC 001")
# response = client.addClass(request)
# print(response)
# request = classRequest(
# userName= "ta326" ,courseCode="ECE 2300", section = "LAB 402")
# response = client.addClass(request)
# print(response)
# request = classRequest(
# userName= "ta326" ,courseCode="ECE 2300", section = "LAB 403")
# response = client.addClass(request)
# print(response)
print("hello")
#response = client.dropClass(request)
#print(response)
#cart_response = client.getCart(cart_request)
#print(cart_response)
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