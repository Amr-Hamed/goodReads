let mongoose = require('mongoose'),
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/goodReadsDB', { useNewUrlParser: true }, ()=>{
    console.log('connected to mongoDB')
})

module.exports = {
    mongoose,
    Schema
}