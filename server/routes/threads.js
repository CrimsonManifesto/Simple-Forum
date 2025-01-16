const router = require('express').Router();

const controller = require('../controllers/threadController')


router.get('/', controller.getAllThreads);

router.post('/', controller.createThread);

module.exports = router;
