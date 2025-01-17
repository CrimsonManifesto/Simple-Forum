const Thread = require("../models/Thread");
const Category = require("../models/Category");

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
        const threads = await Thread.find();
        res.status(200).json(threads);
    } catch (error) {
        res.status(500).json({ error: "Error in GET Thread" });
    }
};

// UPDATE

// DELETE
