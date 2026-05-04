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
            console.log("dados recebido na page bd", finalData, resultworkoutData)
            
        } 
        catch (error){

        }
}

module.exports = saveWorkout;
