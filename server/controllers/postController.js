const Post = require('../models/Post');

// CREATE

exports.createPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        console.error('Error in CREATE post:', error); 
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

// READ

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error in UPDATE post:', error); 
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

// UPDATE





// DELETE
