const { Client } = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "123",
    database: "PulseLab"
})

const query = `INSERT INTO customer (nome, email) VALUES ($1, $2) RETURNING *;`;
const values = ['natan', 'teste@gmail.com'];

client.query(query, values, (err, res) => {
    if (!err) {
        // .rows trará o resultado por causa do RETURNING * na query
        console.log("Inserido com sucesso:", res.rows[0]);
    } else {
        console.error("Erro na query:", err.message);
    }
    client.end();
})