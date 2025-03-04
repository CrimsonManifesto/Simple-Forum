const {
  Schema,
  model
} = require("mongoose");

const ThreadSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  status: {
    type: String,
    enum: ['open', 'closed'],
    default: 'open'
  },
  type: {
    type: String,
    default: 'normal'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ThreadModel = model("Thread", ThreadSchema)

module.exports = ThreadModel