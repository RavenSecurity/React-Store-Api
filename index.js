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

// MongoClient.connect('mongodb://localhost:27017/animals', (err, client) => {
//   if (err) throw err;

//   const db = client.db('animals');
//   db.collection('mammals').find().toArray((err, result) => {
//     if (err) throw err;
//     console.log(result);
//     client.close();
//   });
// });


// Setup MongoDB
// Production Heroku
// Authentification [JWT]
// Stripe