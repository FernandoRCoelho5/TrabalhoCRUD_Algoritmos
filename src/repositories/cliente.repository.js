import db from '../config/database.js';

db.run(`
    CREATE TABLE IF NOT EXISTS clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    cpf TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    telefone TEXT,
    endereco TEXT
    )
`);

function createClienteRepository(novoCliente) {
    return new Promise((resolve, reject) => {

        const { nome, cpf, email, telefone, endereco } = novoCliente;

        db.run(
            `INSERT INTO clientes (nome, cpf, email, telefone, endereco) VALUES (?, ?, ?, ?, ?)`,
            [nome, cpf, email, telefone, endereco],
            function (err) {
                if (err) {
                    return reject(err);
                }
                resolve({ id: this.lastID, ...novoCliente });
            }
        );
    });
}

export default {
    createClienteRepository
};