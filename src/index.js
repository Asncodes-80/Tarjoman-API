const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const conn = mysql.createConnection({
    // host:'localhost',
    // user:'root',
    // password:'',
    // database:'tarjoman'

    host:'158.58.187.220',
    user:'TarjomanUser',
    password:'Mez76%f1',
    database:'tarjomandb'
});

conn.connect((err)=>{
    if(err) return console.log('Connection failed');
    console.log('Connected');
});

app.get('/',(req,res)=>{
    res.send('Tarjoman is ready')
});


app.post('/syncLan',(req,res)=>{
    if(req.body.parameter==""|| req.body.lang==""){
        return console.log("error");
    }else{
    const sql = `SELECT * FROM commands WHERE LanguageId LIKE "%${req.body.lang}%" AND KeyWords LIKE "%${req.body.parameter}%"`;
    const runQuery = conn.query(sql,(err,results)=>{
        if(err) return res.send('Something went wrong');
        return res.send(results);
    });
}
});

const port =3250;

app.listen(port,()=>{
    console.log(`Your port is : ${port}`);
});