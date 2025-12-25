What is HTTP and how does it work? Explain the request-response cycle.

ans = 
http (typer text transfer protocol) is a protocol which is used for communication between client  and server.
client send the request server and server recive the request or server check the user details in database if user is available then send the response clint and status 200;


What are the different HTTP methods and when should each be used?

ans = 
GET – used to fetch data from server ; ex. get all tasks
POST – used to create new data ;ex. add new task
PUT – used to update full data ;ex. update whole task object
PATCH – used to update partial data ;ex. only update task status
DELETE – used to delete data ; ex. delete a task


Explain HTTP status codes. What's the difference between 2xx, 3xx, 4xx, and 5xx?

ans = 
HTTP status codes tell about result of request.
200  =  Success
Ex. 200 ok, 201 Created

300 = Redirection

400 = client side error
Ex. =  400 Bad Request, 404 Not Found

500 = server side error
Ex =  500 internal server erro



What are HTTP headers? Name some important request and response headers.

ans = 
http headers are key-value pairs which send extra information in request or response.
example = request-headers,content-Type,authorization,response headers


What is the difference between stateless and stateful protocols? Is HTTP stateless?

ans =
stateless = server does not remember previous request
stateful = server remembers client data
but we can manage state using Cookies,Sessions,JWT tokens


Explain idempotency in REST APIs. Which HTTP methods are idempotent?

ans = 
same request multiple times  =  same result
ex = get ,post, delete, put,