const express = require("express")
const server = express()


//configurar pasta publica
server.use(express.static("public"))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Configurar caminhos da minha aplicação
// página inicial 
//req: Requisição
//resp: Resposta
server.get("/", function(req,res){
    return  res.render("index.html")
})
server.get("/create-point", function(req,res){
    return res.render("create-point.html")
})
server.get("/search", function(req,res){
    return res.render("search-results.html")
})

//ligar o servidor
server.listen(3000)