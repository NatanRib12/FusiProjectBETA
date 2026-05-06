const { Client } = require('pg');

async function loginAthlete(resultLoginData) {
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

            const query = `SELECT * FROM athlete WHERE email = $1 AND passwordathlete = $2;`

            // Mapeando os dados que vêm dos seus objetos finalData e resultworkoutData
            const loginValues = [
                resultLoginData.email,
                resultLoginData.password,
            ];

            const res = await client.query(query, loginValues);
            await client.end();
            console.log(res.rows[0])
            
            if (res.rows.length > 0){
                return res.rows[0];
            } else {
                return false;
            }
        } 
        catch (error){
            console.log(error.message);
            return false;
        }
}

module.exports = loginAthlete;