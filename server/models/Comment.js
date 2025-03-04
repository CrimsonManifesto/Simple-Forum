const {
  Schema,
  model
} = require("mongoose");

const CommentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  dislike:{
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const CommentModel = model("Comment", CommentSchema)

module.exports = CommentModel