Manual
https://www.npmjs.com/package/json-server

Install
npm i -g json-server

db.json
{
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    }
  ],
  "comments": [{
    "id": 1,
    "body": "some comment",
    "postId": 1
  }],
  "profile": {
    "name": "typicode"
  },
  "users": [
    {"id": 1, "name": "Tom", "job": "Programmer"},
    {"id": 2, "name": "David", "job": "Designer"},
    {"id": 3, "name": "John", "job": "Manager"},
    {"id": 4, "name": "Frank", "job": "Programmer"}
  ]
}
Start
json-server --watch db.json

Routes
Plural routes
GET /posts GET /posts/1 POST /posts PUT /posts/1 PATCH /posts/1 DELETE /posts/1

Singular routes
GET /profile POST /profile PUT /profile PATCH /profile