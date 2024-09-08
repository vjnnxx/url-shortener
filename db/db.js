const mongoose = require('mongoose');
const dotevn = require('dotenv');

dotevn.config()

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.n6oby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)