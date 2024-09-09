import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
    id : {
        type: String,
        required: true,
    },

    originalUrl: {
        type: String,
        required: true,
    }, 

    shortUrl: {
        type: String,
        required: true,
    },

    access: {
        type: Number,
        required: true,
        default: 0,
    },

    date: {
        type: String,
        required: true,
    }
});

const Url = mongoose.model('url', UrlSchema);
export default Url;