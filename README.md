# Microservices Benchmark
The application implements a student class enrollment service consisting of several microservices including roster/login/signup/student dashboard/recommendation. The frontend is built with Angular, backend built with mongoDb, communicate between services built with gRPC. Finally we used Docker to build the applications. 

Supported actions:
- create a student account
- search for the classes users are interested in by multiple ways (class number, class name, class field, etc.)
- get class recommendation based on students' preference
- enroll in a courses given the new added class is not at fully capacity and does not conflict with any existing ones
- check reviews/comments from previous stduents who took the class

## Run the suite
```
./build frontend.sh
```
This will build/deploy all the Angular components inside enrollment-app.
```
docker-compose build
```
This will set up all the needed libraries with the correct version number for you. (phew, what a relief!)
```
docker-compose up
```
This will actually run the services. Now you can access the frontend with localhost:5000 and play with the backend services and mongoDb in Docker dashboard.

![Roster Page](https://octodex.github.com/images/roster_page.png)
![Search Page](https://octodex.github.com/images/search.png)
![Course Page](https://octodex.github.com/images/course_page.png)
![Professor Page](https://octodex.github.com/images/prof_page.png)