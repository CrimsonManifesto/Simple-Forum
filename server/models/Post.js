const {
  Schema,
  model
} = require("mongoose");


const PostSchema = new Schema({
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
  

const PostModel = model("Post", PostSchema)

module.exports = PostModel