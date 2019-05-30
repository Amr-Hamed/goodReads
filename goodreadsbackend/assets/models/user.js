let {mongoose} = require('./mongoose.js'),
{Schema} = require('./mongoose.js');
bcrypt = require('bcrypt');
require('mongoose-type-email');

mongoose.connect('mongodb://localhost/goodReadsDB', { useNewUrlParser: true }, ()=>{
    console.log('connected to mongoDB')
})

let UserSchema = new Schema({
    name : { type : String , required : true , index : { unique : true}},
    password : { type : String , required : true },
    isAdmin : Boolean,
    first_name : String,
    last_name : String,
    email : { type: mongoose.SchemaTypes.Email, required : true},
    photo : { data: Buffer, contentType: String }
})

let User = mongoose.model('User' , UserSchema);

module.exports = { User };

// let user = new User({
//     name : 'khaled',
//     password : '1234',
//     isAdmin : false,
//     first_name : 'mohamed',
//     last_name : 'khaled',
//     email : 'mohamedkhaled@gmail.com',
// })

// user.save( (err , user)=>{
//     if(err)
//         console.log(err)
//     else 
//         console.log('user saved to db' , user);
// })