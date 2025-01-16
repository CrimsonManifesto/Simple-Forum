const {
  Schema,
  model
} = require("mongoose");

const NotificationSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isRead: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


const NotificationModel = model("Notification", NotificationSchema)

module.exports = NotificationModel