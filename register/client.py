import grpc
from studentRegister_pb2_grpc import registerStub
channel = grpc.insecure_channel("localhost:8081")
client = registerStub(channel)
from studentRegister_pb2 import (
    Request,
    Response,
)
request = Request(
userName='ta325678', password='testpassword',firstName='Tamzid', lastName='Ahmed')
response = client.register(request)
print(response)
