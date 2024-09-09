import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

function connect (){
    mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.n6oby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
}

export default connect;
