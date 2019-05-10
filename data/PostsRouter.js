const express = require('express');

const Posts = require('./db.js');

const router = express.Router();

router.get('/', async (req, res) => {
    
    try {
      const posts = await Posts.find(req.query);
      res.status(200).json(posts);
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the Posts',
      });
    }
  });

  router.post('/', async (req, res) => {

    try {
      const post = await Posts.insert(req.body);
      res.status(201).json(post);
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error adding the Post',
      });
    }
  });
  
  router.get('/:id', async (req, res) => {
    const postId = req.params.id;

    try{
        const post = await Posts.findById(postId);

        if (post) {
            res.status(200).json(hub)
        } else {
            res.status(404).json({errorMessage: "Post Not Found"})
        }
    } catch {
        console.log(error);
        res.status(500).json({
            errorMessage: "error retrieving individual post."
        })
    }
  })

module.exports = router;