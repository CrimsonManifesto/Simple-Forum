const {
  Schema,
  model
} = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: null
  },
  role: {
    type: String,
    enum: ['admin', 'moderator', 'user'],
    default: 'user'
  },
  birthday: {
    type: String,
  },
  location: {
    type: String,
  },
  website: {
    type: String,
  },
  message: {
    type: Number,
    default: 0
  },
  score: {
    type: Number,
    default: 0
  },
  point: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'banned'],
    default: 'active'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


const UserModel = model("User", UserSchema)

module.exports = UserModel