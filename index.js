// const http = require("http"); 

// const app = http.createServer((req, res) => { 
//    if (req.url === "/" && req.method === "GET") { 
//     res.end(`<h1> Home </h1>`);
//    }
//    if (req.url === "/About" && req.method === "GET") { 
//     res.end(`<h1> About </h1>`);
//    }
//    if (req.url === "/News" && req.method === "GET") { 
//     res.end(`<h1> News </h1>`);
//    }
// }); 

import express from "express";
const app = express()
 
app.get("/products", (req, res) => { 
    res.end(`<h1> Hi </h1>`)
})
app.get("/products/:id", (req, res) => { 
    res.end(`<h1> Details Products ${req.params.id} </h1>`)

})

app.listen(8088,() =>{
    console.log('sever is run')
})