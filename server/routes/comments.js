const router = require('express').Router();

const controller = require('../controllers/commentController')


router.get('/', controller.getAllComments);

router.post('/', controller.createComment);

module.exports = router;
