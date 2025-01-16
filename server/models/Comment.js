const {
  Schema,
  model
} = require("mongoose");

const CommentSchema = new Schema({
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
  status: {
    type: String,
    enum: ['visible', 'hidden'],
    default: 'visible'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const CommentModel = model("Comment", CommentSchema)

module.exports = CommentModel