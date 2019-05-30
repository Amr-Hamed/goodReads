let {mongoose} = require('./mongoose.js'),
{Schema} = require('./mongoose.js');

mongoose.connect('mongodb://localhost/goodReadsDB', { useNewUrlParser: true }, ()=>{
    console.log('connected to mongoDB')
})

let ReviewSchema = new Schema({
    user_ID : [{type: mongoose.SchemaTypes.ObjectId, ref: 'User'}],
    book_ID : [{type: mongoose.SchemaTypes.ObjectId, ref: 'Book'}],
    review : String
})

let Review = mongoose.model('Review' , ReviewSchema);

module.exports = { Review };


// let review = new Review({
//     user_ID : '5cedc2101ee64c459d51e908',
//     book_ID : '5ced9ebbaf09a108f3fb0b3b',
//     review : 'great'
// })

// review.save( (err , review)=>{
//     if(err)
//         console.log(err)
//     else 
//         console.log('rating saved to db' , review);
// })