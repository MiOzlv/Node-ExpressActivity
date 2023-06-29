const express= require('express');
const fs = require( 'fs');

const server = express();
const PORT = 3000;

app.use('/home', (req, res)=>{
    fs.readFile('../frontend/contact.html', (err, data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
})

app.listen(PORT, ()=>{
    console.log('Server listening on PORT: ${PORT}');
})