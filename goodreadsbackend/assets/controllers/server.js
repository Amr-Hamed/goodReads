const express = require('express'),
app = express();

app.listen(3000 , ()=>{
    console.log('server started on port 3000!')
})

module.exports = { app };