const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);
const mcq = require('./model/mcq');
const { error } = require('console');
const { resolve } = require('path');
var MongoClient = require('mongodb').MongoClient;

const app = express();
const PORT = process.env.PORT || 9996;

function addNewDocument(databaseName, collectionName, document) {
    let promise = new Promise(function (Resolve, Reject) {
        var MongoClient = require('mongodb').MongoClient;
        var url = link;
        MongoClient.connect(url, function (err, db) {
            if (err) {
                Reject(err);
            };
            var dbo = db.db(databaseName);
            dbo.collection(collectionName).insertOne(document, function (err, res) {

                if (err) {
                    Reject(err);
                };
                Resolve(res);
                db.close();
            })
        })
    }
    )
    return promise;
};


function getAllDocumentsAccordingToObjectOfSubject(databaseName, collectionName, obj) {
    let myPromise = new Promise(function (Resolve, Reject) {
        MongoClient.connect(link, function (err, db) {
            if (err) throw err;
            var dbo = db.db(databaseName);
            dbo.collection(collectionName).findOneAndUpdate(obj).toArray(function (err, result) {
                if (err) throw err;
                db.close();
                Resolve(result); // when successful
                Reject(err);  // when error
            });
        });
    });

    return myPromise;
}

function getAllDocuments(databaseName, collectionName) {
    let myPromise = new Promise(function (Resolve, Reject) {
        var MongoClient = require('mongodb').MongoClient;
        var url = link;

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(databaseName);
            dbo.collection(collectionName).find({}).toArray(function (err, result) {
                if (err) throw err;
                db.close();
                Resolve(result);
                Reject(err);
            });
        });
    });

    return myPromise;
};

// Function to get documents according to subjects from dataBase
function getDocumentsBySubject(databaseName, collectionName, Subject) {
    let myPromise = new Promise(function (Resolve, Reject) {
        var MongoClient = require('mongodb').MongoClient;
        var url = link;

        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(databaseName);
            dbo.collection(collectionName).find({ subject: Subject }).toArray(function (err, result) {
                if (err) throw err;
                db.close();
                Resolve(result);
                Reject(err);
            });
        });
    });

    return myPromise;
};




function incrementMcqsCounter(databaseName, collectionName) {
    let promise = new Promise(function (resolve, reject) {
        let promise2 = getAllDocuments(databaseName, collectionName);
        promise2.then((array) => {
            resolve(array.length + 1);
        })
        promise2.catch((err) => {
            reject(err);
        })
    });
    return promise;

}


// const link = 'mongodb://localhost:27017/mcqs_Database';
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



mongoose.connect(link, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true

}).then(
    () => {
        console.log('Connected to Cloud database');
    }
).catch((e) => {
    console.log(`Error connecting to Atlas Cloud database ${e}`);
})

const store = new MongoDBSession({
    uri: link,
    collection: 'mySessions'
});

app.use(
    session({
        secret: "ajfaksajfasknakj",
        resave: false,
        saveUninitialized: false,
        store: store
    })
)

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json())
app.use(bodyParser.json())


app.use('/', express.static(path.join(__dirname, 'static')));


// app.use('/quizTest', express.static(path.join(__dirname, 'quizTest')));

// app.get('/quizTest', (req, res) => {
//     getAllDocuments('mcqs_Database', 'mcqs', {}).then((result) => {
//         indexarray = [];
//         for (let i = 0; i < result.length; i++) {
//             indexarray.push(result[i].mcqsId);
//         }
//         console.log(indexarray);

//         res.send(result);
//     }).catch((e) => {
//         console.log(e);
//     })
//     res.sendFile(path.join(__dirname, 'quizTest', 'index.html'));
// })

app.use('/adminPanel', express.static(path.join(__dirname, 'private')));
app.post('/addMcqss', async (req, res) => {
    console.log(req.body);
    // const { question, options, explanation, subject } = req.body

    let promise = incrementMcqsCounter('mcqs_Database', 'mcqs');
    promise.then((result) => {
        console.log("result is " + result);
        // adding result to the req.body
        req.body.mcqsId = result;
        console.log(req.body);
        const pendingPromise = addNewDocument("mcqs_Database", "mcqs", req.body)
        pendingPromise.then(() => {
            return res.json({ status: "ok" });
        })
        pendingPromise.catch((e) => {
            if (e.code === 11000) {
                return res.json({ status: 'error', error: 'Duplicate MCQ' });
            }
            else {
                return res.json({ status: 'error', error: 'ERROR' });
            }
        })
    })

    // const response = await mcq.create({
    //     question,
    //     options,
    //     explanation
    // })



    // console.log(response)

})







app.set('view engine', 'ejs');
app.use('/math', express.static(path.join(__dirname, 'views')));
app.get('/math', (req, res) => {
    // getAllDocuments('mcqs_Database', 'mcqs', { subject: 'Maths' }).then((result) => {
    getDocumentsBySubject('mcqs_Database', 'mcqs', 'Maths').then((result) => {
        res.render('index', { mcqs: result });
        // res.redirect('/math');
    }).catch((e) => {
        console.log(e);
    })

})
app.use('/physics', express.static(path.join(__dirname, 'views')));
app.get('/physics', (req, res) => {
    // getAllDocuments('mcqs_Database', 'mcqs', { subject: 'Physics' }).then((result) => {
    getDocumentsBySubject('mcqs_Database', 'mcqs', 'Physics').then((result) => {
        res.render('index', { mcqs: result });
        // res.redirect('/math');
    }).catch((e) => {
        console.log(e);
    })

})

app.use('/Chemistry', express.static(path.join(__dirname, 'views')));
app.get('/Chemistry', (req, res) => {
    // getAllDocuments('mcqs_Database', 'mcqs', { subject: 'Chemistry' }).then((result) => {
    getDocumentsBySubject('mcqs_Database', 'mcqs', 'Chemistry').then((result) => {
        res.render('index', { mcqs: result });
        // res.redirect('/math');
    }).catch((e) => {
        console.log(e);
    })

})

app.use('/Biology', express.static(path.join(__dirname, 'views')));
app.get('/Biology', (req, res) => {
    // getAllDocuments('mcqs_Database', 'mcqs', { subject: 'Biology' }).then((result) => {
    getDocumentsBySubject('mcqs_Database', 'mcqs', 'Biology').then((result) => {
        res.render('index', { mcqs: result });
        // res.redirect('/math');
    }).catch((e) => {
        console.log(e);
    })

})

app.use('/English', express.static(path.join(__dirname, 'views')));
app.get('/English', (req, res) => {
    // getAllDocuments('mcqs_Database', 'mcqs', { subject: 'English' }).then((result) => {
    getDocumentsBySubject('mcqs_Database', 'mcqs', 'English').then((result) => {
        res.render('index', { mcqs: result });
        // res.redirect('/math');
    }).catch((e) => {
        console.log(e);
    })

})

app.use('/Computer', express.static(path.join(__dirname, 'views')));
app.get('/Computer', (req, res) => {
    // getAllDocuments('mcqs_Database', 'mcqs', { subject: 'Computer' }).then((result) => {
    getDocumentsBySubject('mcqs_Database', 'mcqs', 'Computer').then((result) => {
        res.render('index', { mcqs: result });
        // res.redirect('/math');
    }).catch((e) => {
        console.log(e);
    })

})

app.use('/LogicalReasoning', express.static(path.join(__dirname, 'views')));
app.get('/LogicalReasoning', (req, res) => {
    // getAllDocuments('mcqs_Database', 'mcqs', { subject: 'LogicalReasoning' }).then((result) => {
    getDocumentsBySubject('mcqs_Database', 'mcqs', 'LogicalReasoning').then((result) => {
        res.render('index', { mcqs: result });
        // res.redirect('/math');
    }).catch((e) => {
        console.log(e);
    })

})




app.post('/submit', async (req, res) => {
    const array = req.body['array'];
    console.log(array);
    const slug = req.headers.referer.toString().split('/')[3];
    console.log(slug)

    const slugs =
    {
        'math': 'Maths',
        'physics': 'Physics',
        'Chemistry': 'Chemistry',
        'Biology': 'Biology',
        'English': 'English',
        'Computer': 'Computer',
        'LogicalReasoning': 'LogicalReasoning'
    }

    const subject = slugs[slug]

    const pendingPromise = getDocumentsBySubject('mcqs_Database', 'mcqs', subject)
    pendingPromise.then((result) => {
        console.log(result);

        // for (let i = 0; i < result.length; i++) {
        //     for (let j = 0; j < array.length; j++) {
        //         if (result[i].mcqsId == array[j].id && Number(result[i].explanation) == array[j].answer)
        //         {

        //         }
        //     }
        // }

        let count = 0;
        for (let i = 0; i < result.length; i++) {
            if (result[i].mcqsId == array[i].id && Number(result[i].explanation) == array[i].answer) {
                count++;
            }
        }


        return res.json({ status: "ok", count: count });

    });
    // pendingPromise.catch((e) => {
    //     console.log(e);
    //     return res.json({ status: 'error', error: 'ERROR' });
    // })

})



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})

