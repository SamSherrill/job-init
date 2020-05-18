const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First name"
  },
  lastName: {
    type: String,
    trim: true,
    required: "Last name"
  },
  email: {
    type: String,
    trim: true,
    required: "Your email address"
  },
  password: {
    type:  String,
    trim: true,
    required: "Your password"
  },
  location: {
    type: String,
    trim: true
  },
  skills: {
    HTML: {
      type: Boolean
    },
    CSS: {
      type: Boolean
    },
    JavaScript: {
      type: Boolean
    },
    NodeJS: {
      type: Boolean
    },
    Express: {
      type: Boolean
    },
    MySQL: {
      type: Boolean
    },
    MongoDB: {
      type: Boolean
    },
    PWA: {
      type: Boolean
    },
    React: {
      type: Boolean
    }
  }

  // === MAYBE USEFUL IF WE WANT TO ONLY SHOW NEW JOBS LATER ========
  //   date: {
  //     type: Date,
  //     default: Date.now
  //   }
  //==================================================================
});

const userData = mongoose.model("userData", userSchema);

module.exports = userData;