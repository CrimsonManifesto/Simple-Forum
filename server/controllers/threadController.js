const Thread = require('../models/Thread');

// CREATE

exports.createThread = async (req, res) => {
    try {
        const thread = new Thread(req.body);
        await thread.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(501).json({ error: 'Error in CREATE Thread' });
    }
};

// READ

exports.getAllThreads = async (req, res) => {
    try {
        const threads = await Thread.find();
        res.status(200).json(threads);
    } catch (error) {
        res.status(500).json({ error: 'Error in GET Thread' });
    }
};

// UPDATE





// DELETE
