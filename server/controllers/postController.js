const Post = require('../models/Post');

// CREATE

exports.createPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(501).json({ error: 'Error in CREATE post' });
    }
};

// READ

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Error in GET post' });
    }
};

// UPDATE





// DELETE
