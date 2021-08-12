var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { address: /^p/ };
  dbo.collection("employee").deleteMany(query, function(err, res) {
    if (err) throw err;
    console.log(res.deletedCount + " documents deleted");
    db.close();
  });
});