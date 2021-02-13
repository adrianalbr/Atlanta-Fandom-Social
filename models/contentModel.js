const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContentSchema = new Schema ({
    category: {
        type: [String],
        // default:["Comic", "Cosplay", "Video Games", "Anime"] 
    },

    title: {
        type: String, 
    },

    imageURL: {
        type: String
    },

    url: {
        type: String
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    date: {
        type: Date,
        default: Date.now
    },

    contentText: {
        type: String,
        default: ""
    }

})

const Content = mongoose.model("Content", ContentSchema);

module.exports = Content;