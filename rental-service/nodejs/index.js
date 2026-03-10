import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pg from 'pg';

const port = process.env.PORT || 5050;

const app = express();

const { Pool } = pg;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ message: 'Connected to Postgres!', time: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send('Database connection error');
  }
});

app.get('/', (req, res) => {
    res.status(200).json({'message': 'Hello World!'})
})

app.listen(port, () => console.log(`Server started on port: ${port}`))
