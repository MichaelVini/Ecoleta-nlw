// importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// utilizar o objeto de banco de dados, para nossas operações
   db.serialize(function(){
// // //     //Com comandos SQL eu vou:

// //     //1 Criar uma tabela
// //     // db.run(`
// //     //     CREATE TABLE IF NOT EXISTS points (
// //     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
// //     //         image TEXT,
// //     //         name TEXT,
// //     //         address TEXT,
// //     //         address2 TEXT,
// //     //         state TEXT,
// //     //         city TEXT,
// //     //         items TEXT
// //     //     );
// //     // `)
// //    2 Inserir dados na tabela
//     const query = ` 
//         INSERT INTO points (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//     ) VALUES (?,?,?,?,?,?,?);`
    
//     const values = [ 
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Papéis e Papelão"
//     ]
    
//     function afterInsertData(erro){
//         if (erro) {
//             return console.log(erro)
//         }
//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)

// //     //3 Consultar dados
// //     // db.all(`SELECT * FROM points`, function(erro,rows) {
// //     //     if (erro) {
// //     //         return console.log(erro)
// //     //     }
// //     //     console.log("Registros:")
// //     //     console.log(rows)
// //     // })

// //     //4 deletar dados
//     // Deletar todos os dados -> 
//   db.run(`DELETE FROM points`)
// //     //Deletar pelo id -> 
    db.run(`DELETE FROM points WHERE id = ?`, [21], function(erro){
       if (erro) {
           return console.log(erro)
       }
       console.log("Registro deletado com sucesso") })
   })