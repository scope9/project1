const db = require('../models');

module.exports = function (app) {

    app.get('/api/tweet', function (req, res) { // GET = what  you are reading
        db.tweet.find({}) // do we want all or some of the tweets.  {username: "EPA"} means go find all the tweets with username EPA
          .then(function (tweets) { // wait until you get .find and run the function as soon as you get the response
            res.json(tweets);   // giving response back from get request in JSON format
          })
          .catch(function (err) { // sending error message along to user
            res.json(err);
          });
      });

      // Line 5-12 is a callback function passing one function to another. This will run when get is called
    // Every model built with mongoose
    
      app.post('/api/tweet', function (req, res) {  // Post you are adding
        db.tweet.create(req.body)  // use tweet model but create instead.  req.body = requesting body
          .then(function (tweets) {
            res.json(tweets);
          })
          .catch(function (err) {
            res.json(err);
          });
      });


      // app.delete('/routes/api-routes', function (req, res) {
      //   res.send('Message delete');
      // });


      // Old
      

// New
  app.delete("/api/tweet/:id", (req, res) => {
   
    db.tweet.findByIdAndRemove(req.params.id).then(() => {
      res.send("success");
    });
  }); 

  // app.delete("/api/tweet/:id", (req, res) => {
   
  //   db.tweet.findByIdAndRemove(req.params.id).then((deletetweet) => {
  //     res.send(deletetweet);
  //   });
  // }); 

  // app.delete("/api/tweet/:tweetid", (req, res) => {
   
  //   db.Tweet.findByIdAndRemove(req.params.tweetid).then(() => {
  //     res.send("success");
  //   });
  // });

// req.body is for post.    send information as object
// req.params is an object 
}

// 

// Post -> api/'tweet'  username: 'EPA'
                    // field name username and value = EPA



// const db = require('../models');




