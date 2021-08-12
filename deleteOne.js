var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { name: 'ajay' };
  dbo.collection("employee").deleteOne(myquery, function(err, res) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});