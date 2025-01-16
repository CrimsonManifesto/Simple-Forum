const axios = require('axios');
const User = require('../models/User');

exports.loginOrRegister = async (req, res) => {
    const { token } = req.body;

    try {
        const response = await axios.get(`https://${process.env.AUTH0_DOMAIN}/userinfo`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        const userInfo = response.data;

        let user = await User.findOne({ auth0Id: userInfo.sub });
        if (!user) {
            user = new User({
                auth0Id: userInfo.sub,
                name: userInfo.name,
                email: userInfo.email,
                picture: userInfo.picture,
            });
            await user.save();
        }

        res.status(200).json({ message: 'User saved or updated', user });
    } catch (error) {
        console.error('Error logging in or registering:', error);
        res.status(500).json({ error: 'Failed to log in or register' });
    }
};
