const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        default: ''
    },
    threads: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thread'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const CategoryModel = model("Category", CategorySchema);
module.exports = CategoryModel;
