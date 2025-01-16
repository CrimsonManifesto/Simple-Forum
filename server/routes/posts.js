const router = require('express').Router();

const controller = require('../controllers/postController')


router.get('/', controller.getAllPosts);

router.post('/', controller.createPost);

module.exports = router;
