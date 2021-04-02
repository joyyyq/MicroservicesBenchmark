import grpc
from studentRegister_pb2_grpc import registerStub
channel = grpc.insecure_channel("localhost:50052")
client = registerStub(channel)
from studentRegister_pb2 import (
    Request,
    Response,
)
request = Request(
userName='ta326', password='testpassword',firstName='Tamzid', lastName='Ahmed')
response = client.register(request)
print(response)
