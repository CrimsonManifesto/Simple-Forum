const router = require('express').Router();

const controller = require('../controllers/categoryController')


router.get('/', controller.getAllCategories);

router.post('/', controller.createCategory);

module.exports = router;
