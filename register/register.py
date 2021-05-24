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
client_2 = pymongo.MongoClient("cart_db",27017)
# client_3 = pymongo.MongoClient("wishlist_db",27017)
db = client.register
salt = bcrypt.gensalt()
db_2 = client_2.cart
# db_3 = client_3.wishlist

class registerService(
    studentRegister_pb2_grpc.registerServicer
):
    def validateUsername(self, request, context):
        if( db.studentInfo.count_documents({"userName":request.userName}) > 0 ):
            print("failed name validaion")
            return Response(success=False)
        else:
            print("succeed name validaion")
            return Response(success=True)
    
    def validatePassword(self, request, context):
        pwd = db.studentInfo.find_one({"userName":request.userName})["password"]
        if( not bcrypt.checkpw(request.password,pwd) ):
            print("failed pwd validaion")
            return Response(success=False)
        else:
            print("succeed pwd validaion")
            return Response(success=True)

    def register(self, request, context):
        # global client,db
        if( db.studentInfo.count_documents({"userName":request.userName}) > 0 ):
            print("failed register: user already exists")
            return Response(success=False)
        hashed = bcrypt.hashpw(request.password.encode('utf-8'), salt)
        request1 = {'userName':request.userName, 'password':hashed, 'firstName':request.firstName, 'lastName': request.lastName, }
        request2 = {'userName':request.userName, 'cart':[],}
        # request3 = {'userName':request.userName, 'wishlist':[],}
        db_2.cartInfo.insert_one(request2)
        # db_3.wishlistInfo.insert_one(request3)
        db.studentInfo.insert_one(request1)
        return Response(success=True)
    
def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=20))
    studentRegister_pb2_grpc. add_registerServicer_to_server(
        registerService(), server
    )
    server.add_insecure_port("0.0.0.0:5001")
    server.start()
    server.wait_for_termination()


if __name__ == "__main__":
    serve()
