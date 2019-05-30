let {mongoose} = require('./mongoose.js'),
{Schema} = require('./mongoose.js');

mongoose.connect('mongodb://localhost/goodReadsDB', { useNewUrlParser: true }, ()=>{
    console.log('connected to mongoDB')
})

let BookSchema = new Schema({
    name : { type : String , required : true , index : { unique : true}},
    photo : { data: Buffer, contentType: String },
    cat_ID : [{type: mongoose.SchemaTypes.ObjectId, ref: 'Category'}],
    auth_ID : [{type: mongoose.SchemaTypes.ObjectId, ref: 'Author'}],
})

let Book = mongoose.model('Book' , BookSchema);

module.exports = { Book };


// let book = new Book({
//     name : 'Friends',
//     cat_ID : '5cedb76a923fd867a1f6fd7d',
//     auth_ID : '5cedbca73fb1e618475d4c80',
// })

// book.save( (err , book)=>{
//     if(err)
//         console.log(err)
//     else 
//         console.log('book saved to db' , book);
// })