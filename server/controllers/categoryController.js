const Category = require('../models/Category');

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
        const categoriesWithThreads = await Category.find()
            .populate({
                path: 'threads',
                select: 'title description createdAt status' 
            })
            .sort({ createdAt: -1 });   

        res.status(200).json(categoriesWithThreads);
    } catch (error) {
        console.error('Error fetching categories with threads:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
};
// UPDATE





// DELETE
