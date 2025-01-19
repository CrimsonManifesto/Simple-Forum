const Post = require('../models/Post');
const Comment = require('../models/Comment');

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

        const enrichedPosts = await Promise.all(
            posts.map(async (post) => {
                const replyList = await Comment.find({postId : post._id});
                return {
                    ...post.toObject(),
                    replyList
                }

    })
        )
        res.status(200).json(enrichedPosts);
    } catch (error) {
        console.error('Error in UPDATE post:', error); 
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

// UPDATE





// DELETE
