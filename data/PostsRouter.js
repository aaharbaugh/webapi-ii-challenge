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

    if(req.body.title && req.body.contents){
        try {
            const post = await Posts.insert(req.body);
            res.status(201).json(post);
          } catch (error) {
            // log error to database
            console.log(error);
            res.status(500).json({
              message: 'Error while saving the post to the database.',
            });
          }
    } else {
        res.status(400).json({
            message: "Please provide title and content for the post"
        })
    }

  });
  
  router.get('/:id', async (req, res) => {
    const postId = req.params.id;

    try{
        const post = await Posts.findById(postId);

        if (post.id === postId) {
            res.status(200).json(post)
        } else {
            res.status(404).json({message: "Post with that id does not exist"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "error retrieving individual post."
        })
    }
  })

  router.delete('/:id', async (req, res) => {
      const postId = req.params.id;

      try{
          const posts = await Posts.remove(postId)

          if (posts.id === postId) {
              res.status(200).json({message: "post Deleted"})
          } else {
              res.status(404).json({message: "The post with the specified ID does not exist."})
          }
      } catch (error) {
          console.log(error);
          res.status(500).json({
              message: "The post could not be removed"
          })
      }
  })

  router.put('/:id', async (req, res) => {
      const postId = req.params.id;

      if(req.body.title && req.body.contents){
        try{
            const posts = await Posts.update(postId, req.body)
  
            if(posts.id === postId){
                res.status(200).json({message: "Post Updated"})
            } else {
                res.status(404).json({message: "The post with the specified ID does not exist."})
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "error updating individual post"
            })
        }
      } else {
          res.status(400).json({
              error: "Please provide title and contents for the post. "
          })
      }
      
  })

module.exports = router;