const Thread = require("../models/Thread");
const Category = require("../models/Category");
const PostModel = require("../models/Post");
const CommentModel = require('../models/Comment');

// CREATE

exports.createThread = async (req, res) => {
    try {
        const { title, description, userId, categoryId, status } = req.body;

        if (!title || !userId || !categoryId) {
            return res.status(400).json({
                error: "Bad Request",
                details: "Missing required fields: title, userId, or categoryId",
            });
        }

        const thread = new Thread({
            title,
            description,
            userId,
            categoryId,
            status,
        });
        const savedThread = await thread.save();

        await Category.findByIdAndUpdate(
            categoryId,
            { $push: { threads: savedThread._id } },
            { new: true }
        );

        res.status(201).json(savedThread);
    } catch (error) {
        console.error("Error creating thread:", error);
        res
            .status(500)
            .json({ error: "Internal Server Error", details: error.message });
    }
};
// READ

exports.getAllThreads = async (req, res) => {
    try {
        const threads = await Thread.find()

        const enrichedThreads = await Promise.all(
            threads.map(async (thread) => {
                
                const replyNumber = await PostModel.countDocuments({ threadId: thread._id });

                const postList = await PostModel.find({ threadId: thread._id })

                const latestPost = await PostModel
                    .findOne({ threadId: thread._id })
                    .sort({ createdAt: -1 })
                    .populate({
                        path: 'userId',
                        select: 'username avatar',
                    });
                const latestComment = latestPost
                    ? await CommentModel.findOne({
                        postId: latestPost._id
                    })
                        .sort({ createdAt: -1 })
                        .populate({
                            path: 'userId',
                            select: 'username avatar',
                        })
                    : null
                return {
                    ...thread.toObject(),
                    replyNumber: replyNumber,
                    postList: postList,
                    latestPost: latestPost
                        ? {
                            ...latestPost.toObject(),
                            
                            latestComment: latestComment || null,
                        }
                        : null,
                }
            }
            )
        )
        res.status(200).json(enrichedThreads);
    } catch (error) {
        res.status(500).json({ error: "Error in GET Thread" });
    }
};

// UPDATE

// DELETE
