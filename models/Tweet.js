//add your Tweet model here

var mongoose = require("mongoose");

var Schema = mongoose.Schema; // Save a reference to the Schema constructor

var TweetSchema = new Schema({  //new UserSchema object


content: {
    type: String,
    trim: true,
    required: "Tweet is Required"
  },

  username: {
    type: String,
    trim: true,
    required: "username is Required"
  }

  
//   email: {  //signup
//     type: String,
//     match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    
//   },

  // characters: {   
  //   type: String,
  //   trim: true,
  //   required: "String is Required",
  //   validate: [function (character) {
  //     return character.length > 140;
  //   }, "tweet should be longer"]
  // },

});

// This creates our model from the above schema, using mongoose's model method
var Tweet = mongoose.model("Tweet", TweetSchema);

module.exports = Tweet;