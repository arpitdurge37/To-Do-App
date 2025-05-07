var mongoClient = require("mongodb").MongoClient;
var cors = require("cors");
var express = require("express");

var conString = "mongodb://127.0.0.1:27017";
var app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.get('/get-user', (req, res)=>{
     mongoClient.connect(conString).then(clientObj=>{
         var database = clientObj.db("todo");
         database.collection('tblusers').find({}).toArray().then(documents=>{
             res.send(documents);
             res.end();
         })
     })
});

app.get('/get-task/:userid', (req, res)=>{
    mongoClient.connect(conString).then(clientObj=>{
        var database = clientObj.db("todo");
        database.collection('tblappointments').find({UserId:req.params.userid}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        })
    })
});

app.post('/register-user', (req, res)=>{
    var user = {
        UserId:req.body.UserId, 
        UserName: req.body.UserName,
        Password: req.body.Password, 
        Email: req.body.Email, 
        Mobile: req.body.Mobile
    }
    mongoClient.connect(conString).then(clientObj=>{
        var database = clientObj.db("todo");
        database.collection('tblusers').insertOne(user).then(()=>{
            console.log('User Added');
            res.end();
        })        
    })
});

app.post('/add-task', (req, res)=>{
    var task = {
        Appointment_Id: parseInt(req.body.Appointment_Id),
        Title: req.body.Title, 
        Description: req.body.Description, 
        Date: new Date(req.body.Date), 
        UserId: req.body.UserId
    }
    mongoClient.connect(conString).then(clientObj=>{
        var database = clientObj.db("todo");
        database.collection('tblappointments').insertOne(task).then(()=>{
            console.log('Task Added');
            res.end();
        })        
    })
});

app.put('/edit-task/:id', (req, res)=>{
    var id = parseInt(req.params.id);
    var task = {
        Appointment_Id: parseInt(req.body.Appointment_Id),
        Title: req.body.Title, 
        Description: req.body.Description, 
        Date: new Date(req.body.Date), 
        UserId: req.body.UserId
    }
    mongoClient.connect(conString).then(clientObj=>{
        var database = clientObj.db("todo");
        database.collection('tblappointments').updateOne({Appointment_Id:id},{$set:task}).then(()=>{
             console.log('Task Edited');
             res.end();
        })
    })
});

app.delete('/delete-task/:id', (req, res)=>{
    var id = parseInt(req.params.id);
    
    mongoClient.connect(conString).then(clientObj=>{
        var database = clientObj.db("todo");
        database.collection('tblappointments').deleteOne({Appointment_Id:id}).then(()=>{
             console.log('Task Deleted');
             res.end();
        })
    })
});

app.listen(2020);
console.log(`Server Started : 127.0.0.1:2020`);

