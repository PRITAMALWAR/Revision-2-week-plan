
1. What is Express.js? Why use it over plain Node.js?

ans =
express.js is a node.js framework which is used to build web applications and APIs.
In plain Node.js we need to write more code for routing and handling requests.
Express makes work easy, code is small and fast, so we use Express instead of node.js only.



2. What is middleware in Express? Explain the middleware chain.

ans =
Middleware is a function which runs between request and response.
It can check request, modify data or stop request.
Middleware chain means middleware runs one by one until response is sent to client.



3. What are the different types of middleware?

ans =
Application-level middleware works on whole application using app.use().
Router-level middleware works only on specific router.
Error-handling middleware is used to handle errors and it has four parameters.


4. How does error handling work in Express?

ans =
Express handles error using error middleware.
When error occurs we pass error using next(err).
Error middleware sends error message and status code to client.



5. What is the difference between app.use() and app.all()?

ans =
app.use() is mainly used for middleware and works for all HTTP methods.
app.all() is used for one route but handles all HTTP methods like GET, POST, PUT etc.


6. Explain routing in Express. How do route parameters work?

ans =
Routing means defining different URL paths for different responses.
Route parameters are dynamic values in URL like /product/:id.
We can get parameter value using req.params.id.


7. What are route handlers vs middleware?

ans =
Route handler sends final response to client.
Middleware processes request before route handler.
Middleware can be reused but route handler is for specific route.


8. How do you handle file uploads in Express?

ans =
File uploads in Express are handled using multer package.
Multer helps to upload files like images and documents.
It stores files on server or cloud storage.


9. What is morgan? What logging strategies would you implement?

ans =
Morgan is a logging middleware in Express.
It logs request method, URL and status code.
We use request logs, error logs and server logs for debugging.


10. How would you structure a large Express application?

ans =
Large Express application should be divided into folders.
Like routes, controllers, models, middleware.
This makes code clean and easy to manage.

