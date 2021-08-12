//var MongoClient = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
//var express=require("express");
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("employee", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    //db.close();
  });
  console.log("Database created!");
  db.close();
});