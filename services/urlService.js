import Url from '../models/url.js';

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

            return allUrls;
        } catch (error) {
            console.log(error);
        }
    }

    static async getOriginalUrl(url){
        try{
            const originalUrl = await Url.findOne({originalUrl: url});
            return originalUrl;
        } catch (error) {
            console.log(error);
        }
    }

    static async getUrlById(id){
        try{
            const shortUrl = await Url.findOne({id: id});
            return shortUrl;
        } catch (error) {
            console.log(error);
        }
    }

    static async incrementAccess(id){
        try{
            const url = await Url.findOne({id: id});
            let access = url.access;
            const response = await Url.updateOne({id: id}, {access: access + 1});
            return response
        } catch (error){
            console.log(error);
        }
    }
}

export default UrlService;