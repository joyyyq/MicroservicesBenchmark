from concurrent import futures
import random
import pymongo
import grpc
import studentRegister_pb2_grpc
from google.protobuf.json_format import MessageToJson
import bcrypt
client = pymongo.MongoClient("localhost",27017)
db = client.enrollment
from studentRegister_pb2 import (
    Request,
    Response,
)
class regiaterService(
    studentRegister_pb2_grpc.registerServicer
):
    def register(self, request, context):
        if( db.studentInfo.count_documents({"userName":request.userName}) > 0 ):
            context.abort(grpc.StatusCode.ALREADY_EXISTS, "user already exist")
        #request = MessageToJson(request)
        salt = bcrypt.gensalt()
        hashed = bcrypt.hashpw(request.password.encode('utf-8'), salt)
        request = {'userName':request.userName, 'password':hashed, 'firstName':request.firstName, 'lastName': request.lastName, }
        print(request)
        db.studentInfo.insert_one(request)
        return Response(success=True)
def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    studentRegister_pb2_grpc. add_registerServicer_to_server(
        regiaterService(), server
    )
    server.add_insecure_port("[::]:50052")
    server.start()
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
