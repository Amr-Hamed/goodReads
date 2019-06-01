const express = require('express'),
bodyParser = require('body-parser'),
{User} = require('../models/user'),
{Category} = require('../models/category'),
{Author} = require('../models/author'),
{Book} = require('../models/books'),
app = express(),
cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//categories section

//categories page
app.get('/admin/category' , (req , res)=>{
    Category.find().then( (category)=>{
        res.send({category})
    }, (e)=>{
        res.status(400).send(e);
    })
})

//add category
app.post('/admin/category' , (req , res)=>{
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
app.get('/admin/author' , (req , res)=>{
    Author.find().then( (author)=>{
        res.send({author})
    }, (e)=>{
        res.status(400).send(e);
    })
})

//books page
app.get('/admin/book' , (req , res)=>{
    Book.find().then( (book)=>{
        res.send({book})
    }, (e)=>{
        res.status(400).send(e);
    })
})


app.listen(4000 , ()=>{
    console.log('server started on port 3000!')
})
