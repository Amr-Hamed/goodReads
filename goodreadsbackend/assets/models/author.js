let {mongoose} = require('./mongoose.js'),
{Schema} = require('./mongoose.js');

let AuthorSchema = new Schema({
    first_name : String,
    last_name : String,
    date_of_birth : Date,
})

let Author = mongoose.model('Author' , AuthorSchema);

module.exports = { Author };

// let author = new Author({
//     first_name : '7amok4a',
//     last_name : 'elnms',
//     date_of_birth : '1950-05-01',
// })

// author.save( (err , author)=>{
//     if(err)
//         console.log(err)
//     else 
//         console.log('user saved to db' , author);
// })