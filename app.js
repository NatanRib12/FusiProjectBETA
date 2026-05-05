const checkLogin = require('./database/databaseLogin');
const saveDataRegister = require('./database/databaseRegister');
const registerData = require('./service/register');
const saveData = require('./database/databaseWorkout');
const workoutsData = require('./service/workout');
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

    // Login
    else if (req.url == '/login' && req.method == 'POST') {
        req.on('data', chunk => {
            bodyLogin += chunk.toString()
        });

        req.on('end', async () => {
            // Assim que todas as chunck forem convertidas, o evento 'end' é iniciado e converte body para JSON permitindo que seja possível trabalhar com os dados.

            try{
                    const finalLogin = JSON.parse(bodyLogin);
                    const resultLoginData = await checkLogin(finalLogin);

                    if( resultLoginData == false ){
                        console.log("Registro de usuário não encontrado");
                        res.statusCode = 401;
                        res.setHeader('Content-type', 'application/json');

                        res.end(JSON.stringify({
                            message: "Credências inválidas"
                        }));
                    } else {
                        res.statusCode = 200;
                        res.setHeader('Content-type', 'application/json');

                        res.end(JSON.stringify({
                            athleteId: resultLoginData.id
                        }))
                    }

                } catch (error) {
                    res.statusCode = 401 
                    console.log(error.message)   
                    res.setHeader('Content-type', 'application/json');

                    res.end(JSON.stringify({
                        message: "Erro ao realizar login"
                    }));
                }
        });
    }

    // REGISTER
    else if (req.url == '/register' && req.method == 'POST') {
        req.on('data', chunk => {
            bodyRegister += chunk.toString()
        });

        req.on('end', async () => {
            // Assim que todas as chunck forem convertidas, o evento 'end' é iniciado e converte body para JSON permitindo que seja possível trabalhar com os dados.

            try{
                    const finalRegister = JSON.parse(bodyRegister);  
                    const resultRegisterData = registerData(finalRegister);
                    
                    if( resultRegisterData == false ){
                        console.log("Registro de usuário inválido");
                        res.statusCode = 400;
                        res.setHeader('Content-type', 'application/json');

                        res.end(JSON.stringify({
                            message: "Erro ao registrar usuário"
                        }));
                    } else {
                        const resultSaveData = await saveDataRegister(finalRegister);
                        if (resultSaveData == false){
                            console.log("Dados não foram salvos");
                            res.statusCode = 400;
                            res.setHeader('Content-type', 'application/json');

                            res.end(JSON.stringify({
                                message: "Ocorreu um erro durante o registro de usuário"
                            }));
                        } else {
                            console.log("Dados salvos com sucesso")
                            res.statusCode = 200;
                            res.setHeader('Content-type', 'application/json');

                            res.end(JSON.stringify({
                                message: "Conta criada com sucesso!",
                            }));
                            // localStorage.
                        }
                    }

                } catch (error) {
                    res.statusCode = 400 
                    res.setHeader('Content-type', 'application/json');

                    res.end(JSON.stringify({
                        message: "Dados não recebidos com sucesso"
                    }));
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
                    const resultworkoutData = workoutsData(finalData);

                    if (resultworkoutData == false){
                        res.statusCode = 400;
                        console.log("Erro ao processar informações de treino");
                        res.setHeader('Content-type', 'application/json');

                        res.end(JSON.stringify({
                            message: "Erro ao processar informações de treino"
                        }));
                    } 
                    else {
                        const resultSaveDataWorkout = await saveData(finalData, resultworkoutData)
                        if (resultSaveDataWorkout == false){
                            console.log("Erro ao processar dados");
                            res.statusCode = 400;
                            res.setHeader('Content-type', 'application/json');

                            res.end(JSON.stringify({
                                message: "Erro ao salvar treino"
                            }));
                        } else {
                            console.log("Treino registrado");
                            res.statusCode = 200;
                            res.setHeader('Content-type', 'application/json');

                            res.end(JSON.stringify({
                                message: "Trieno registrado com sucesso"
                            }));
                        }
                    }
                    
                }     
            catch (error){
                    res.statusCode = 400 
                    console.log(error.message)   
                    res.setHeader('Content-type', 'application/json');

                    res.end(JSON.stringify({
                        message: "Erro ao salvar treino"
                    }));
                }
        });
    }
}).listen(port)

console.log("Servidor rodando")