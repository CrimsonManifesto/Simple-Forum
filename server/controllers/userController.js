const User = require('../models/User');

// CREATE

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.error('Error in CREATE user:', error); 
        res.status(500).json({ error: 'Internal Server Error', details: error.message });    }
};

// READ

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error in GET user' });
    }
};

// UPDATE





// DELETE
