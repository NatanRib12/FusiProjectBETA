const { Client } = require('pg');

async function getWorkoutHistory(athleteId) {
    // Registra informações do banco para depois logar
    const client = new Client({
        host: "localhost",
        user: "postgres",
        port: 5432,
        password: "123",
        database: "PulseLab"
    });

    // Seleciona todos os dados conforme o ID do usuário ordenados pela data
    try {
        await client.connect();

        const query = `
            SELECT *
            FROM workouts
            WHERE atleta_id = $1
            ORDER BY workoutdate DESC
        `;

        const result = await client.query(query, [athleteId]);

        await client.end();

        return result.rows;

    } catch (error) {
        console.log(error.message);
        return [];
    }
}

module.exports = getWorkoutHistory;