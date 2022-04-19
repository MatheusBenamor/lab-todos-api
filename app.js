const express = require('express');
const connectDb = require('./config/db.config');
const cors = require('cors');

connectDb();

const app = express();

app.use(express.json());
app.use(
    cors({
    credentials: true,
    origin: ['http://localhost:3000']
})
);

app.use('/todos', require('./routes/todos.routes'));

app.listen(process.env.PORT, () => console.log(`Server listen on port ${process.env.PORT}`))