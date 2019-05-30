let {mongoose} = require('./mongoose.js'),
{Schema} = require('./mongoose.js');

mongoose.connect('mongodb://localhost/goodReadsDB', { useNewUrlParser: true }, ()=>{
    console.log('connected to mongoDB')
})

let User_BookSchema = new Schema({
    user_ID : [{type: mongoose.SchemaTypes.ObjectId, ref: 'User'}],
    book_ID : [{type: mongoose.SchemaTypes.ObjectId, ref: 'Book'}],
    status: {
        type: String,
        enum : ['want to read','currently reading' , 'done reading']
    }
})

let User_Book = mongoose.model('User_Book' , User_BookSchema);

module.exports = { User_Book };


// let user_book = new User_Book({
//     user_ID : '5ced91a9ad81e71a02db9abb',
//     book_ID : '5cedc1e819299b43a4c5f7b1',
//     status : 'currently reading'
// })

// user_book.save( (err , user_book)=>{
//     if(err)
//         console.log(err)
//     else 
//         console.log('rating saved to db' , user_book);
// })