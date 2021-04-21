# This is the cart service. 
## The main goals:
  - students can add/remove classes to their schedule. 

use the following command if you need to recompile proto
python -m grpc_tools.protoc -I. --python_out=. --grpc_python_out=. studentCart.proto