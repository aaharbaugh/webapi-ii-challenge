const express = require('express');

const PostsRouter = require('./data/PostsRouter');

const server = express();

server.use(express.json());
server.use('/api/posts', PostsRouter)

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Posts API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

module.exports = server;