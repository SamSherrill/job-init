const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: Number,
    unique: true
  },
  username: {
    type: String,
    trim: true,
    required: "Your username"
  },
  password: {
    type:  String,
    trim: true,
    required: "Your password"
  },
  // SKILLS GO HERE, WE MAY WANT TO LIST THEM ALL INDIVIDUALLY AS BOOLEANS


// === MAYBE USEFUL IF WE WANT TO ONLY SHOW NEW JOBS LATER ========
//   date: {
//     type: Date,
//     default: Date.now
//   }
//==================================================================
});

const userData = mongoose.model("userData", userSchema);

module.exports = userData;