const Url = require('../models/url');

class UrlService {
    static async createUrl(data){
        try{
            const newUrl = {
                id : data.id,
                originalUrl: data.originalUrl,
                shortUrl: data.shortUrl,
                access: data.access,
                date: data.date,
            }

            const response = await new Url(newUrl).save();
            return response;
        } catch (error){
            console.log(error);
        }
    }

    static async getAllUrls(){
        try{
            const allUrls = await Url.find({});
            console.log(allUrls)
            return allUrls;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UrlService;