const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res)=>{
    console.log('request made')
    // set header content type
    res.setHeader('Content-Type', 'text/html')
    // rendering html pages
    fs.readFile('./index.html', 'utf-8', (err, data)=>{
        if(err){
            console.log(err)
            res.end()
        }
        res.write(data)
        res.end()
    })
});

server.listen(3000, 'localhost', ()=>{
    console.log('listening to request')
})