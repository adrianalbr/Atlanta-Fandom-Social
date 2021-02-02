const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContentSchema = new Schema ({
    category: {
        type: [String],
        default:["Comic", "Cosplay", "Video Games", "Anime"] 
    },
    
    type: {
        type: String,
        default: ["Article", "Website", "Image"]
    },

    subject: {
        type: String, 
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    date: {
        type: Date,
        default: Date.now
    },

    URL: {
        type: String,
        default: ""
    },

    contentText: {
        type: String,
        default: ""
    }

})

const Content = mongoose.model("Content", ContentSchema);

module.exports = Content;