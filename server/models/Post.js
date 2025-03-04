const {
  Schema,
  model
} = require("mongoose");


const PostSchema = new Schema({
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
  threadId: {
    type: Schema.Types.ObjectId,
    ref: 'Thread',
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


const PostModel = model("Post", PostSchema)

module.exports = PostModel