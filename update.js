var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj1 = [
    { name: 'pradip', address: 'mumbai'},
    { name: 'rajveer', address: 'abad'},
    { name: 'vrat', address: 'pune'},
   
  ]

  var old = { address: "pune" };
  var newd = { $set:{ address: "delhi" } };
  dbo.collection("student1").updateOne(old, newd, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
   // db.close();
  });
  dbo.collection("student1").find().limit(50).toArray(function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
});