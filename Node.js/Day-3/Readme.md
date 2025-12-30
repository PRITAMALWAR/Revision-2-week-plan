

What is JWT (JSON Web Token)? Explain its structure (header, payload, signature).

ans.

jWT is a token used for authentication and authorization.
Header contains type and algorithm, payload contains user info, signature verifies token.



How does JWT authentication work? Explain the flow.

ans.

user logs in with username and password.
server checks user in database.
server sends JWT to client.
client sends JWT in request header.
server verifies token and responds.


What are the advantages and disadvantages of JWT over sessions?

ans.

advantages server does not store info, works across multiple servers, easy for APIs and mobile apps.
disadvantages token size bigger, hard to revoke, stolen token can be used until expiry.



where should you store JWTs in the client? (localStorage vs cookies vs memory)

ans.
localStorage – easy but vulnerable to XSS
cookies-safe with HttpOnly
memory-safe but lost on refresh


What is the difference between access tokens and refresh tokens?

ans.

access token – short-lived, used for API requests
refresh token – long-lived, used to get new access token


How do you handle JWT expiration and refresh?**

ans.

access token expires after short time.
client sends refresh token to server.
server verifies and issues new access token.


What is Role-Based Access Control (RBAC)?

ans.

RBAC controls access based on user roles.
Example: Admin can delete users, normal user cannot.


How would you implement authorization in an API?

ans.

user sends JWT in request header.
server checks token and extracts user role.
server allows or denies access based on role and route.


