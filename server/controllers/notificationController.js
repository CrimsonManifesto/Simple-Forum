const Notification = require('../models/Notification');

// CREATE

exports.createNotification = async (req, res) => {
    try {
        const notification = new Notification(req.body);
        await notification.save();
        res.status(201).json(notification);
    } catch (error) {
        res.status(501).json({ error: 'Error in CREATE notification' });
    }
};

// READ

exports.getAllNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find();
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: 'Error in GET notification' });
    }
};

// UPDATE





// DELETE
