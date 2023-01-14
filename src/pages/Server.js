//const express = require('express');
//const path = require('path');
//const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
//const bcrypt = require('bcryptjs');
//const session = require('express-session');
//const MongoDBSession = require('connect-mongodb-session')(session);
//
//
//const app = express();
//const PORT = process.env.PORT || 9996;
//const link = 'mongodb://localhost:27017';
//
//function addNewDocument(databaseName, collectionName, document) {
//    let promise = new Promise(function (Resolve, Reject) {
//        var MongoClient = require('mongodb').MongoClient;
//        var url = link;
//        MongoClient.connect(url, function (err, db) {
//            if (err) {
//                Reject(err);
//            };
//            var dbo = db.db(databaseName);
//            dbo.collection(collectionName).insertOne(document, function (err, res) {
//
//                if (err) {
//                    Reject(err);
//                };
//                Resolve(res);
//                db.close();
//            })
//        })
//    }
//    )
//    return promise;
//};
//
//
//function getAllDocuments(databaseName, collectionName) {
//    let myPromise = new Promise(function (Resolve, Reject) {
//        var MongoClient = require('mongodb').MongoClient;
//        var url = link;
//
//        MongoClient.connect(url, function (err, db) {
//            if (err) throw err;
//            var dbo = db.db(databaseName);
//            dbo.collection(collectionName).find({}).toArray(function (err, result) {
//                if (err) throw err;
//                db.close();
//                Resolve(result);
//                Reject(err);
//            });
//        });
//    });
//
//    return myPromise;
//};
//
//
///*---for specific attribute------------*/
//
//function getDocumentsBySubject(databaseName, collectionName, Subject) {
//    let myPromise = new Promise(function (Resolve, Reject) {
//        var MongoClient = require('mongodb').MongoClient;
//        var url = link;
//
//        MongoClient.connect(url, function (err, db) {
//            if (err) throw err;
//            var dbo = db.db(databaseName);
//            dbo.collection(collectionName).find({ subject: Subject }).toArray(function (err, result) {
//                if (err) throw err;
//                db.close();
//                Resolve(result);
//                Reject(err);
//            });
//        });
//    });
//
//    return myPromise;
//};
//
//
// 
// mongoose.connect(link, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// }).then(
//     () => {
//         console.log('Connected to local database');
//     }
// ).catch((e) => {
//     console.log(`Error connecting to local database ${e}`);
// })
//
//
// 
//
////mongoose.connect(link, {
////    useNewUrlParser: true,
////    useUnifiedTopology: true,
////    useNewUrlParser: true
////
////}).then(
////    () => {
////        console.log('Connected to Cloud database');
////    }
////).catch((e) => {
////    console.log(`Error connecting to Atlas Cloud database ${e}`);
////})
////
////const store = new MongoDBSession({
////    uri: link,
////    collection: 'mySessions'
////});
//
//app.use(
//    session({
//        secret: "ajfaksajfasknakj",
//        resave: false,
//        saveUninitialized: false,
//        store: store
//    })
//)
//
//app.use(bodyParser.json())
//
//app.listen(PORT, () => {
//    console.log(`Server started on port ${PORT}`);
//})
//
//
//export default addNewDocument
//
//
//
//
//