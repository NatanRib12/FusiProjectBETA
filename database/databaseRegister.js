const { Client } = require('pg');

async function saveRegister(resultRegisterData) {
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

            const query = `INSERT INTO athlete (name, email, passwordathlete) 
            VALUES ($1, $2, $3) 
            RETURNING *;`

            // Mapeando os dados que vêm dos seus objetos finalData e resultworkoutData
            const registerValues = [
                resultRegisterData.name,
                resultRegisterData.email,
                resultRegisterData.password 
            ];

            console.log(registerValues)

            const res = await client.query(query, registerValues);
            await client.end();
            return true;
        } 
        catch (error){
            console.log(error.message);
            return false;
        }
}

module.exports = saveRegister;