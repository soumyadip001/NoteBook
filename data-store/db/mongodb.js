/***
 * Run mongodb server first
 * specify --dbpath=path-to-folder
 * C:\Users\739316\mongodb\bin\mongod.exe --dbpath=C:\Users\739316\mongodb-data
 */
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/good-notes', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
})