let {mongoose} = require('./mongoose.js'),
{Schema} = require('./mongoose.js');

mongoose.connect('mongodb://localhost/goodReadsDB', { useNewUrlParser: true }, ()=>{
    console.log('connected to mongoDB')
})

let CategorySchema = new Schema({
    name : { type : String , required : true , index : { unique : true}},
})

let Category = mongoose.model('Category' , CategorySchema);

module.exports = { Category };

// let category = new Category({
//     name : 'romance',
// })

// category.save( (err , category)=>{
//     if(err)
//         console.log(err)
//     else 
//         console.log('user saved to db' , category);
// })