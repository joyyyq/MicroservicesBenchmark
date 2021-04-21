from concurrent import futures
import random
import pymongo
from google.protobuf.json_format import MessageToJson
import bcrypt

import grpc

from studentRegister_pb2 import (
    Request,
    Response,
)
import studentRegister_pb2_grpc

client = pymongo.MongoClient("register_db",27017)
db = client.register
salt = bcrypt.gensalt()

class registerService(
    studentRegister_pb2_grpc.registerServicer
):
    def validateUsername(self, request, context):
        if( db.studentInfo.count_documents({"userName":request.userName}) > 0 ):
            print("fail validaion")
            return Response(success=False)
        else:
            print("succeed validaion")
            return Response(success=True)
    
    def validatePassword(self, request, context):
        pwd = db.studentInfo.find_one({"userName":request.userName})["password"]
        hashed = bcrypt.hashpw(request.password.encode('utf-8'), salt)
        # if( pwd != request.password ):
        # if( db.studentInfo.count_documents({"userName":request.userName}) > 0 ):
        if( pwd != hashed ):
            print("fail validaion")
            return Response(success=False)
        else:
            print("succeed validaion")
            return Response(success=True)

    def register(self, request, context):
        if( db.studentInfo.count_documents({"userName":request.userName}) > 0 ):
        # if( not db.studentInfo.find_one({"userName": request.userName}) is None ):
            print("failed")
            #context.abort(grpc.StatusCode.ALREADY_EXISTS, "user already exist")
            return Response(success=False)
        hashed = bcrypt.hashpw(request.password.encode('utf-8'), salt)
        request = {'userName':request.userName, 'password':hashed, 'firstName':request.firstName, 'lastName': request.lastName }
        db.studentInfo.insert_one(request)
        return Response(success=True)
    
def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    studentRegister_pb2_grpc. add_registerServicer_to_server(
        registerService(), server
    )
    server.add_insecure_port("0.0.0.0:5001")
    server.start()
    server.wait_for_termination()


if __name__ == "__main__":
    serve()