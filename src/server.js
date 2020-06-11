const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db")

//configurar pasta publica
server.use(express.static("public"))

//habilitar o uso do req.body
server.use(express.urlencoded({ extended: true }))

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
    return  res.render("index.html", {title: "Um titulo"})
})

server.get("/create-point", function(req,res){

    //req.query: Query Strings da nossa url
   // console.log(req.query)

    return res.render("create-point.html")
})

server.post("/savepoint", function(req, res){
    
    //req.body: O corpo do nosso formulário
    console.log(req.body)

    //Inserir dados no banco de dados
    const query = ` 
        INSERT INTO points (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
    ) VALUES (?,?,?,?,?,?,?);`
    
    const values = [ 
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.adress2,
        req.body.state,
        req.body.city,
        req.body.items
    ]
    
    function afterInsertData(erro){
        if (erro) {
            return console.log(erro)
            return res.send("Erro no cadastro!")
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
        
        return res.render("create-point.html", { saved: true})
    }

    db.run(query, values, afterInsertData)

    
})

server.get("/search", function(req,res){

    const search = req.query.search
    
    //Pegar dados do banco de dados
    db.all(`SELECT * FROM points where city LIKE '%${search}%'`, function(erro,rows) {
                if (erro) {
                    return console.log(erro)
                }
                //pegar total de itens do banco de dados
                const total = rows.length
                //mostrar a pagina html com os dados do banco de dados
                return res.render("search-results.html", { points: rows, total: total})
            })


    
})

//ligar o servidor
server.listen(3000)