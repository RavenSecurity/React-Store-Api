import express from 'express';  
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    console.log('[TEST]!');

    res.send('Hello from Homepage.');
});

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));

const MongoClient = require('mongodb').MongoClient;

// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose



// Setup MongoDB
// Design database
// Production Heroku
// Authentification [JWT]
// Stripe