// Importa http do módulo http e conecta na porta 8080
const http = require('http')
const port = 8080

http.createServer((req,res) => {
    let body = ''

    if(req.url == '/') {
        res.write('<h1>Tela inicial</h1>')
        res.end()
    }

    else if (req.url == '/workouts' && req.method == 'GET') {
        res.write('Lista de treinos')
        res.end()
    }

    else if (req.url == '/workouts' && req.method == 'POST') {
        // Evento 'data' recebe chunck e converte para string e armazena tudo em body até receber todos as chunks
        req.on('data', chunk => {
            body += chunk.toString()
        });

        req.on('end', () => {
            // Assim que todas as chunck forem convertidas, o evento 'end' é iniciado e converte body para JSON permitindo que seja possível trabalhar com os dados.

            try {
                    const finalData = JSON.parse(body)
                    const workoutsData = require('./service')
                    const resultworkoutData = workoutsData(finalData)
                    const saveData = require('./db')

                    if (resultworkoutData == false){
                        res.statusCode = 400
                        console.log("Caiu no if do try")
                        res.end("Bad request")
                    } else {
                        res.statusCode = 200
                        saveData(finalData, resultworkoutData)
                        res.end("dados recebidos")
                    }
                    
                }     
            catch (error){
                    res.statusCode = 400 
                    console.log("Caiu no catch")   
                    res.end()
                }
        });
    }
}).listen(port)

console.log("Servidor rodando")