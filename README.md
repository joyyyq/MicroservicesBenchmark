# Microservices Benchmark
The application implements a student class enrollment service consisting of several microservices including roster/login/signup/student dashboard/recommendation. The frontend is built with Angular, backend built with mongoDb, communicate between services built with gRPC. Finally we used Docker to build the applications. 

Supported actions:
- create a student account
- search for the classes users are interested in by multiple ways (class number, class name, class field, etc.)
- get class recommendation based on students' preference
- enroll in a courses given the new added class is not at fully capacity and does not conflict with any existing ones
- check reviews/comments from previous stduents who took the class
