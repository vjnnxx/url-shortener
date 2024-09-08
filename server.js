const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const UrlService = require('./services/urlService');
require('./db/db');


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
    const newUrl = {
        id : 'hashRandom2',
        originalUrl: 'example02.com/',
        shortUrl: 'baseurl/hashRandom2',
        access: 0,
        date: '08-09-2024',
    };

    const result = UrlService.createUrl(newUrl);
    UrlService.getAllUrls()
    .then(data => res.send(data))
    .catch(error => console.log(error)); 
});