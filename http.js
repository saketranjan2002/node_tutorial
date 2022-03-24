const http=require('http')

const server=http.createServer((req,res)=>{

    if(req.url==='/'){

        // res.write('Welcome to our homepage')
        res.end("welcome to our home page")
    }
    else if(req.url==='/about'){
        res.end("here is our short history")
    }
    else {res.end(`
    <h1>Ooops</h1>
    <p>We dont seem to find the page you are looking for </p>
    <a href="/">back home</a>
    `) }

    // res.end("this is a message")
 
})

server.listen(4000,()=>{
console.log("server listening to port : 4000");
})