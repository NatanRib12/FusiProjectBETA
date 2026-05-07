const { Client } = require('pg');

async function saveWorkout(finalData, resultworkoutData) {
    // Variável com informações para conectar ao banco de dados
    const client = new Client({
        host: "localhost",
        user: "postgres",
        port: 5432,
        password: "123",
        database: "PulseLab"
    });

    // Utiliza requisição INSERT INTO para inserir valores dentro da tabela workouts de acordo com o ID do usuário
    try {
            await client.connect();

            const query = `INSERT INTO workouts (atleta_id, distance, bpm, charge, traningLoad, recoveryscore, recommendation) 
            VALUES ($1, $2, $3, $4, $5, $6, $7) 
            RETURNING *;`

            // Mapeando os dados que vêm dos seus objetos finalData e resultworkoutData
            const workoutDataValues = [
                finalData.athleteId,
                finalData.distance,
                finalData.bpm,
                finalData.charge,
                resultworkoutData.traningLoad,
                resultworkoutData.recovery,
                resultworkoutData.recommendation
            ];

            const res = await client.query(query, workoutDataValues);
            await client.end();

            return true;
        } 
        catch (error){
            console.log(error.message);
            return false;
        }
}

module.exports = saveWorkout;