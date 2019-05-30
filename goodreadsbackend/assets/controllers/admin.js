const express = require('express'),
bodyParser = require('body-parser'),
{User} = require('../models/user'),
{Category} = require('../models/category'),
{Author} = require('../models/author'),
{Book} = require('../models/books'),
app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//categories section

//categories page
app.get('/admin/categories' , (req , res)=>{
    Category.find().then( (categories)=>{
        res.send({categories})
    }, (e)=>{
        res.status(400).send(e);
    })
})

//add category
app.post('/admin/categories' , (req , res)=>{
    let newCat = new Category({
        name : req.body.name
    })
    newCat.save( (newCat)=>{
        res.send(newCat)
    } , (e)=>{
        res.status(400).send(e);
    })
})

//authors page
app.get('/admin/authors' , (req , res)=>{
    Author.find().then( (author)=>{
        res.send({author})
    }, (e)=>{
        res.status(400).send(e);
    })
})

//books page
app.get('/admin/books' , (req , res)=>{
    Book.find().then( (book)=>{
        res.send({book})
    }, (e)=>{
        res.status(400).send(e);
    })
})


app.listen(3000 , ()=>{
    console.log('server started on port 3000!')
})
