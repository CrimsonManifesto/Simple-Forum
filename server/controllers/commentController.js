const Comment = require('../models/Comment');

// CREATE

exports.createComment = async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(501).json({ error: 'Error in CREATE comment' });
    }
};

// READ

exports.getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: 'Error in GET comment' });
    }
};

// UPDATE





// DELETE
