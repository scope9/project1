const express = require('express');
const mongoose = require('mongoose'); // store library into mongoose variable

const PORT = process.env.PORT || 3000; //
const app = express();  // can name the variable something else


app.use(express.urlencoded({ extended: true })); // sets up how you want the server to work (express). Normally pre made in office
app.use(express.json());
app.use(express.static("public")); // where to find the public files


mongoose.connect('mongodb://localhost/twitter', { useNewUrlParser: true });


require('./routes/api-routes')(app); // api put things on database
require('./routes/html-routes')(app);

// // Get Route
// app.get("/tweet", function(req, res) {
//   // Find all tweet
//   db.Tweet.find({})
//     .then(function(dbTweet) {
//       // If all tweer are successfully found, send them back to the client
//       res.json(dbTweet);
//     })
//     .catch(function(err) {
//       // If an error occurs, send the error back to the client
//       res.json(err);
//     });
// });


app.listen(PORT, function() { // telling server what port we assigned it before but to listen in the port
  console.log(`App running on port ${PORT}`); // give something in the port to let us know its running
});