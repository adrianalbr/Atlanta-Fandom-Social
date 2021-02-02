const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const InterestsSchema = new Schema({
    category: {
        type: String,
        default:["Comic", "Cosplay", "Video Games", "Anime"]
    }
})

const Interests = mongoose.model("Interests", InterestsSchema);

module.exports = Interests;