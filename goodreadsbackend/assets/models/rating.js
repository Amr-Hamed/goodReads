let {mongoose} = require('./mongoose.js'),
{Schema} = require('./mongoose.js');

mongoose.connect('mongodb://localhost/goodReadsDB', { useNewUrlParser: true }, ()=>{
    console.log('connected to mongoDB')
})

let RatingSchema = new Schema({
    rating : Number,
    user_ID : [{type: mongoose.SchemaTypes.ObjectId, ref: 'User'}],
    book_ID : [{type: mongoose.SchemaTypes.ObjectId, ref: 'Book'}],
})


let Rating = mongoose.model('Rating' , RatingSchema);

module.exports = { Rating };

// let rating = new Rating({
//     rating : 2,
//     user_ID : '5cedb7488c43ff67701b0b03',
//     book_ID : '5cedc2101ee64c459d51e908',
// })

// rating.save( (err , rating)=>{
//     if(err)
//         console.log(err)
//     else 
//         console.log('rating saved to db' , rating);
// })