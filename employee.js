var express = require('express');
var app = express();

var bodyParser=require('body-parser');

app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({limit: "5mb",extended:true}));

var sql = require("mssql");
//const { detectBufferEncoding } = require('tslint/lib/utils');

 // config for your database
 var config = {
    user: 'harsha',
    password: 'harsha@123',
    server: 'LAPTOP-NIRGEL45\\SQLEXPRESS', 
    database: 'EMPLOYEE',
    "options":{
        "encrypt": true,
        "enableArithAbort": true
    }
};

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/jobs', function (req, res) {

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from dbo.jobs', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
        });
    });
});


app.post('/employees', function (req, res,next) {

    // connect to your database
    sql.connect(config, function (err) {
     if (err) console.log(err);
      
        // create Request object
        var request = new sql.Request();
        console.log(req.body);

        var name = req.body.name;
        var email = req.body.email;
        var location = req.body.location;
        var phone = req.body.phone;
        var skype = req.body.skype;
        var skills = JSON.stringify(req.body.skills);
        var industryexperience = req.body.industryexperience;
        var expectedctc = req.body.expectedctc;
        var currentctc = req.body.currentctc;
        var basepay = req.body.basepay;
        var variablepay = req.body.variablepay;
        var noticeperiod = req.body.noticeperiod;
        var uploadresume = req.body.uploadresume;
        var candidateimage = req.body.candidateimage;
        var jobappliedfor = req.body.jobappliedfor;
        var sourcecategory = req.body.sourcecategory;
        var source = req.body.source;
        var workedat = req.body.workedat;
        var lastincrementdate = req.body.lastincrementdate;
        var perincrement = req.body.perincrement;
        var joiningbonus = req.body.joiningbonus;
        var bonusamount = req.body.bonusamount;
        var canpostingdate = req.body.canpostingdate;
        var currentstatus = JSON.stringify(req.body.canpostingdate);
        var scheduleinterview = JSON.stringify(req.body.scheduleinterview);
        var interviewername = JSON.stringify(req.body.interviewername);
        var interviewdate = JSON.stringify(req.body.interviewdate);
        var interviewtime = JSON.stringify(req.body.interviewtime);
        var notes = JSON.stringify(req.body.notes);
        var emailfornotes = JSON.stringify(req.body.emailfornotes);
           
        // query to the database and get the records
        request.query("insert into dbo.employee (name,email,location,phone,skype,skills,industryexperience,expectedctc,currentctc,basepay,variablepay,noticeperiod,uploadresume,candidateimage,jobappliedfor,sourcecategory,source,workedat,lastincrementdate,perincrement,joiningbonus,bonusamount,canpostingdate,currentstatus,scheduleinterview,interviewername,interviewdate,interviewtime,notes,emailfornotes) values ('"+name+"','"+email+"','"+location+"','"+phone+"','"+skype+"','"+skills+"','"+industryexperience+"','"+expectedctc+"','"+currentctc+"','"+basepay+"','"+variablepay+"','"+noticeperiod+"','"+uploadresume+"','"+candidateimage+"','"+jobappliedfor+"','"+sourcecategory+"','"+source+"','"+workedat+"','"+lastincrementdate+"','"+perincrement+"','"+joiningbonus+"','"+bonusamount+"','"+canpostingdate+"','"+currentstatus+"','"+scheduleinterview+"','"+interviewername+"','"+interviewdate+"','"+interviewtime+"','"+notes+"','"+emailfornotes+"')", function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
        });
    });
});


app.post('/jobs', function (req, res,next) {

    // connect to your database
    sql.connect(config, function (err) {
     if (err) console.log(err);
      
        // create Request object
        var request = new sql.Request();
        console.log(req.body);

        var jobname = req.body.jobname;
        var jobdescription = req.body.jobdescription;
        var department = req.body.department;
        var hiringmanager = req.body.hiringmanager;
        var requiredskills = JSON.stringify(req.body.requiredskills);
        var experiencelevel = req.body.experiencelevel;
        var noofpositions = req.body.noofpositions;
        var preferedlocation = req.body.preferedlocation;
        var urgency = req.body.urgency;
        var jobpostingdate = req.body.jobpostingdate;
        var logo = req.body.logo;
           
        // query to the database and get the records
        request.query("insert into dbo.jobs (jobname,jobdescription,department,hiringmanager,requiredskills,experiencelevel,noofpositions,preferedlocation,urgency,jobpostingdate,logo) values ('"+jobname+"','"+jobdescription+"','"+department+"','"+hiringmanager+"','"+requiredskills+"','"+experiencelevel+"','"+noofpositions+"','"+preferedlocation+"','"+urgency+"','"+jobpostingdate+"','"+logo+"')", function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running at localhost:5000..');
});