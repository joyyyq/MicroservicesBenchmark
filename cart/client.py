import grpc
from studentCart_pb2_grpc import cartStub
channel = grpc.insecure_channel("localhost:5003")
client = cartStub(channel)
from studentCart_pb2 import (
    classRequest,
    classResponse,
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
request = classRequest(
userName= "ta326" ,courseCode="ECE 2300", section = "LEC 001")
response = client.dropClass(request)
print(response)