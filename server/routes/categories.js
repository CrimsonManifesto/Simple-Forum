const router = require('express').Router();

const controller = require('../controllers/categoryController')



router.get('/', controller.getCategoriesWithThreads);

router.post('/', controller.createCategory);

module.exports = router;
