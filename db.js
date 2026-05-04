const { Client } = require('pg');

async function saveWorkout(finalData, resultworkoutData) {
    const client = new Client({
        host: "localhost",
        user: "postgres",
        port: 5432,
        password: "123",
        database: "PulseLab"
    });

    try {
            await client.connect();
            // console.log("dados recebido na page bd", finalData, resultworkoutData);

            const atletamockado = 1
            const query = `INSERT INTO workouts (atleta_id, distance, bpm, charge, traningLoad, recoveryscore, recommendation) 
            VALUES ($1, $2, $3, $4, $5, $6, $7) 
            RETURNING *;`

            // Mapeando os dados que vêm dos seus objetos finalData e resultworkoutData
            const workoutDataValues = [
                atletamockado,
                finalData.distance,
                finalData.bpm,
                finalData.charge,
                resultworkoutData.traningLoad,
                resultworkoutData.recovery,
                resultworkoutData.recommendation
            ];

            console.log(workoutDataValues)

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