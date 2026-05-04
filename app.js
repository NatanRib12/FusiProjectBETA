// Importa http do módulo http e conecta na porta 8080
const http = require('http')
const port = 8080

http.createServer((req,res) => {
    let bodyWorkoutData = '';
    let bodyRegister = '';
    let bodyLogin = '';

    if(req.url == '/') {
        res.write('<h1>Tela inicial</h1>')
        res.end()
    }

    //FAZER LOGIN FUNCIONAR
    // // Login
    // else if (req.url == '/login' && req.method == 'POST') {
    //     req.on('data', chunk => {
    //         bodyLogin += chunk.toString()
    //     });

    //     req.on('end', async () => {
    //         // Assim que todas as chunck forem convertidas, o evento 'end' é iniciado e converte body para JSON permitindo que seja possível trabalhar com os dados.

    //         try{
    //                 const finalLogin = JSON.parse(bodyLogin);
    //                 const resultLoginData = loginData(finalLogin);
    //                 const saveDataRegister = require('./database/databaseRegister')
                    
    //                 if( resultRegisterData == false ){
    //                     console.log("Registro de usuário inválido");
    //                     res.statusCode = 400;
    //                     res.end("Registro de usuário inválido");
    //                 } else {
    //                     const resultSaveData = await saveDataRegister(finalRegister);
    //                     if (resultSaveData == false){
    //                         console.log("Dados não foram salvos");
    //                         res.statusCode = 400;
    //                         res.end("Houve um erro durante o registro dos dados");
    //                     } else {
    //                         console.log("Dados salvos com sucesso")
    //                         res.status = 200;
    //                         res.end("Dados salvos com sucesso");
    //                     }
    //                 }
    //             } catch (error) {
    //                 res.statusCode = 400 
    //                 console.log(error.message)   
    //                 res.end("Erro no processamento de dados.")
    //             }
    //     });
    // }

    // REGISTER
    else if (req.url == '/register' && req.method == 'POST') {
        req.on('data', chunk => {
            bodyRegister += chunk.toString()
        });

        req.on('end', async () => {
            // Assim que todas as chunck forem convertidas, o evento 'end' é iniciado e converte body para JSON permitindo que seja possível trabalhar com os dados.

            try{
                    const finalRegister = JSON.parse(bodyRegister);
                    const registerData = require('./service/register');
                    const resultRegisterData = registerData(finalRegister);
                    const saveDataRegister = require('./database/databaseRegister')
                    
                    if( resultRegisterData == false ){
                        console.log("Registro de usuário inválido");
                        res.statusCode = 400;
                        res.end("Registro de usuário inválido");
                    } else {
                        const resultSaveData = await saveDataRegister(finalRegister);
                        if (resultSaveData == false){
                            console.log("Dados não foram salvos");
                            res.statusCode = 400;
                            res.end("Houve um erro durante o registro dos dados");
                        } else {
                            console.log("Dados salvos com sucesso")
                            res.status = 200;
                            res.end("Dados salvos com sucesso");
                        }
                    }
                } catch (error) {
                    res.statusCode = 400 
                    console.log(error.message)   
                    res.end("Erro no processamento de dados.")
                }

        });
    }

    // WORKOUTS
    else if (req.url == '/workouts' && req.method == 'GET') {
        res.write('Lista de treinos')
        res.end()
    }

    // WORKOUTS
    else if (req.url == '/workouts' && req.method == 'POST') {
        // Evento 'data' recebe chunck e converte para string e armazena tudo em body até receber todos as chunks
        req.on('data', chunk => {
            bodyWorkoutData += chunk.toString()
        });

        req.on('end', async () => {
            // Assim que todas as chunck forem convertidas, o evento 'end' é iniciado e converte body para JSON permitindo que seja possível trabalhar com os dados.

            try {
                    const finalData = JSON.parse(bodyWorkoutData);
                    const workoutsData = require('./service/workout');
                    const resultworkoutData = workoutsData(finalData);
                    const saveData = require('./database/databaseWorkout');

                    if (resultworkoutData == false){
                        res.statusCode = 400;
                        console.log("Caiu no if do try");
                        res.end("Erro ao processar informações.");
                    } 
                    else {
                        const resultSaveDataWorkout = await saveData(finalData, resultworkoutData)
                        if (resultSaveDataWorkout == false){
                            console.log("Erro ao processar dados");
                            res.statusCode = 400;
                            res.end("Bad request");
                        } else {
                            console.log("Treino registrado");
                            res.statusCode = 200;
                            res.end("Treino registrado");
                        }
                    }
                    
                }     
            catch (error){
                    res.statusCode = 400 
                    console.log(error.message)   
                    res.end("Erro no processamento de dados.")
                }
        });
    }
}).listen(port)

console.log("Servidor rodando")