import express from 'express';
import ClienteRouter from './src/routes/cliente.routes.js';

const app = express();

app.use(express.json());
app.use(ClienteRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});