import express from 'express';
import bodyParser from 'body-parser';
import UrlService from './services/urlService.js';
import validateUrl from './utils/validateUrl.js';
import formatDate from './utils/formatDate.js';
import { nanoid } from 'nanoid';
import connect from './db/db.js';

connect();

const port = 3000;

const baseAdress = process.env.BASE;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, (req, res)=>{
    console.log('server on');
});

app.get('/:urlID', async (req,res, next)=>{
    const urlId = req.params.urlID;

    const result = await UrlService.getUrlById(urlId);

    if (result == null){
        return res.status(404).json({"error": "NOT_FOUND"});
    } 

    UrlService.incrementAccess(urlId);
    res.writeHead(301, { Location: result.originalUrl});
    res.end();
});

app.post('/shorten', async (req, res)=>{
    const originalUrl = req.body.url;
    if (!validateUrl(originalUrl) || originalUrl == ''){
        return res.status(400).json({"error_code": 'INVALID_DATA', 'error_description': 'Url inválida'})
    }

    const result = await UrlService.getOriginalUrl(originalUrl);

    if (result != null){
        return res.status(200).json({"original_url": result.originalUrl, "short_url": result.shortUrl});
    }

    const uuid = nanoid();
    
    const date = formatDate(new Date());

    const newUrl = {
        id: uuid,
        originalUrl: originalUrl,
        shortUrl: `${baseAdress}/${uuid}`,
        date: date,
    };

    const register = UrlService.createUrl(newUrl)
    .then(data => {
        res.status(201).json({"short_url": data.shortUrl});
    })
    .catch(error => res.status(500).json({"error_code": 'SERVER ERROR'}));
});