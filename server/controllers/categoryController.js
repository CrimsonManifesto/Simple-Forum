const Category = require('../models/Category');

// CREATE

exports.createCategory = async (req, res) => {
    try {
        const category = new Category(req.body);
        await post.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(501).json({ error: 'Error in CREATE category' });
    }
};

// READ

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Error in GET category' });
    }
};

// UPDATE





// DELETE
