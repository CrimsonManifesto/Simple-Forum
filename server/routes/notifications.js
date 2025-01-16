const router = require('express').Router();

const controller = require('../controllers/notificationController')


router.get('/', controller.getAllNotifications);

router.post('/', controller.createNotification);

module.exports = router;
