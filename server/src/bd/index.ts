import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config();

const { Pool } = pg;

 
const pool = new Pool({
    port: 5432,
    host: 'localhost',
    user: 'postgres',
    password:  'admin',
    database: 'ABP',
    ssl:{
      rejectUnauthorized: false 
    }
});


export default pool;
  