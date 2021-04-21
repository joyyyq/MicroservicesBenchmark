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
client_3 = pymongo.MongoClient("wishlist_db",27017)
db = client.register
db_2 = client_2.cart
db_3 = client_3.wishlist

class registerService(
    studentRegister_pb2_grpc.registerServicer
):
    def validateUsername(self, request, context):
        # if( db.studentInfo.find_one({"userName": request.userName}) is None ):
        if( db.studentInfo.count_documents({"userName":request.userName}) > 0 ):
            print("fail validaion")
            return Response(success=False)
        else:
            # console.log("failed validaion")
            print("succeed validaion")
            return Response(success=True)

    def register(self, request, context):
        #global client,db
        if( db.studentInfo.count_documents({"userName":request.userName}) > 0 ):
        # if( not db.studentInfo.find_one({"userName": request.userName}) is None ):
            print("failed")
            #context.abort(grpc.StatusCode.ALREADY_EXISTS, "user already exist")
            return Response(success=False)
        salt = bcrypt.gensalt()
        hashed = bcrypt.hashpw(request.password.encode('utf-8'), salt)
        request_1 = {'userName':request.userName, 'password':hashed, 'firstName':request.firstName, 'lastName': request.lastName, }
        print(request)
        request_2 = {'userName':request.userName, 'cart':[],}
        request_2 = {'userName':request.userName, 'wishlist':[],}
        db_2.cartInfo.insert_one(request_2)
        db_3.wishlistInfo.insert_one(request_3)
        db.studentInfo.insert_one(request_1)
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