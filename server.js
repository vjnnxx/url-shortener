import express from 'express';
import bodyParser from 'body-parser';
import path, {dirname} from 'path';
import UrlService from './services/urlService.js';
import validateUrl from './utils/validateUrl.js';
import formatDate from './utils/formatDate.js';
import { nanoid } from 'nanoid';
import connect from './db/db.js';


connect();

function extractData(data, target){
    target.push(data);
}

const port = 3000;

const baseAdress = 'shortener.com'

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, (req, res)=>{
    console.log('server on');
});

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, './index.html'))
});

app.get('/redirect', (req,res)=>{
    console.log(req.query)
    res.send('Redirecionando...')
    
});

app.post('/shorten', (req, res)=>{
    const originalUrl = req.body.url;
    if (!validateUrl(originalUrl) || originalUrl == ''){
        return res.status(400).json({"error_code": 'INVALID_DATA', 'error_description': 'Url inválida'})
    }

    //Verifica se já há um link cadastrado

    let check = false

    // const result = UrlService.getOriginalUrl(originalUrl)
    // .then(data => {
    //     if (data != '') {
    //         return res.status(200).json({"original_url": `${data.originalUrl}`, "short_url": `${data.shortUrl}`});
    //     };
    // });

    const uuid = nanoid();
    
    const date = formatDate(new Date());

    const newUrl = {
        id: uuid,
        originalUrl: originalUrl,
        shortUrl: `${baseAdress}/${uuid}`,
        date: date,
    };

    //const result = UrlService.createUrl(newUrl).then(data => console.log(data))
    //UrlService.getAllUrls()
    // .then(data => res.send(data))
    // .catch(error => console.log(error)); 
});