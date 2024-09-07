const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, (req, res)=>{
    console.log('ta rolando');
});

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, './index.html'))
});

app.get('/redirect', (req,res)=>{
    console.log(req.query)
    res.send('Redirecionando...')
    
});

app.post('/shorten', (req, res)=>{
    console.log(req.body)
    res.send('Encurtando link...')
});