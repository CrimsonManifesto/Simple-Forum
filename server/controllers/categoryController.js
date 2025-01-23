const Category = require('../models/Category');
const ThreadModel = require('../models/Thread');
const PostModel = require('../models/Post');
const CommentModel = require('../models/Comment');
// CREATE

exports.createCategory = async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        console.error('Error in CREATE category:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};

// READ

exports.getCategoriesWithThreads = async (req, res) => {
    try {
        const categories = await Category.find()
            .populate({
                path: 'threads',
                select: 'title',
            });

        const enrichedCategories = await Promise.all(
            categories.map(async (category) => {
                const threadsWithLatest = await Promise.all(
                    category.threads.map(async (thread) => {

                        const postNumber = await PostModel.countDocuments({ threadId: thread._id });


                        const replyList = await PostModel.find({ threadId: thread._id })

                        const replyNumber = replyList.length > 0
                            ? await CommentModel.countDocuments({ postId: { $in: replyList.map(reply => reply._id) } })
                            : 0;

                        const messageNumber = postNumber + replyNumber;

                        const latestPost = await PostModel.findOne({ threadId: thread._id })
                            .sort({ createdAt: -1 })
                            .select('content createdAt')
                            .populate({
                                path: 'userId',
                                select: 'username avatar',
                            });

                        const latestComment = latestPost
                            ? await CommentModel.findOne({ postId: latestPost._id })
                                .sort({ createdAt: -1 })
                                .populate({
                                    path: 'userId',
                                    select: 'username avatar',
                                })
                            : null;

                        return {
                            ...thread.toObject(),
                            postNumber: postNumber,
                            messageNumber: messageNumber,
                            latestPost: latestPost
                                ? {
                                    ...latestPost.toObject(),
                                    latestComment: latestComment || null,
                                }
                                : null,
                        };
                    })
                );

                return {
                    ...category.toObject(),
                    threads: threadsWithLatest,
                };
            }

            )
        );

        res.status(200).json(enrichedCategories);
    } catch (error) {
        console.error('Error fetching categories with latest posts/comments:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};
// UPDATE





// DELETE
