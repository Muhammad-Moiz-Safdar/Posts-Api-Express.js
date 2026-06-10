# Posts API — Express.js

A REST API built with Express.js as part of my backend learning journey.
Built following the Traversy Media Express.js Crash Course.

## Endpoints

| Method | URL | Description |
|---|---|---|
| GET | /api/posts | Get all posts |
| GET | /api/posts/:id | Get post by id |
| POST | /api/posts | Create a post |
| PUT | /api/posts/:id | Update a post |
| DELETE | /api/posts/:id | Delete a post |

## Post structure

```json
{
  "id": 1,
  "title": "My first post"
}
```

## Tech used
- Node.js
- Express.js
- dotenv
- nodemon

## Run locally
npm install
npm run dev
