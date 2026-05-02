const http = require('http')
const port = 8080

http.createServer((req,res) => {
    let body = ''

    if(req.url == '/'){
        res.write('<h1>Tela inicial</h1>')
        res.end()
    }
    else if (req.url == '/workouts' && req.method == 'GET'){
        res.write('Lista de treinos')
        res.end()
    }
    else if (req.url == '/workouts' && req.method == 'POST'){
        req.on('data', chunk => {
            body += chunk.toString()
        });

        req.on('end', () => {
            const finalData = JSON.parse(body)
            const distancia = finalData.distancia
            const bpm = finalData.bpm
            const esforco = finalData.esforco

            //Mensagem recebimento de dados
            // res.writeHead(200, { 'Content-Type': 'application/json' });
            // res.end(JSON.stringify('Recebido com sucesso'));
            
            if( distancia > 0 && Number.isFinite(distancia)
                 && bpm > 0 && Number.isFinite(bpm)
                 && esforco > 0 && esforco <= 10 && Number.isFinite(esforco)){
                console.log('Dados válidos')
                res.end('Dados validados com sucesso')
            } 
            else {
                console.log('Dados inválidos')
                res.end('Dados não validados')
            }
        });
    }
}).listen(port)

console.log("Servidor rodando")