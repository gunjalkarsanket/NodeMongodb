var MongoClient = require("mongodb").MongoClient;
var url= require("url");
var url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url,function(err,db)
{
    if(err) throw err;
    var dbo = db.db("mydb");
    var myobj1 = [
        { name: 'pradip', address: 'mumbai'},
        { name: 'sanket', address: 'pune'},
        { name: 'vrat', address: 'pune'},
       
      ]
      dbo.collection("student2").insertMany(myobj1, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
      });

});
