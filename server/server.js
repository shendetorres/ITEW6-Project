const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'university_system',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let db;

// Initialize database connection
async function initDB() {
  try {
    db = mysql.createPool(dbConfig);
    console.log('Connected to MySQL database');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
}

// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { identifier, password, role } = req.body;

    if (!identifier || !password || !role) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    let query, params;

    if (role === 'student') {
      // For students, identifier is student_no
      query = `
        SELECT su.*, s.first_name, s.last_name, s.student_no
        FROM system_user su
        JOIN student s ON su.linked_student_id = s.student_id
        WHERE s.student_no = ? AND su.role = 'Student' AND su.status = 'Active'
      `;
      params = [identifier];
    } else if (role === 'faculty') {
      // For faculty, identifier is username
      query = `
        SELECT su.*, f.first_name, f.last_name
        FROM system_user su
        JOIN faculty f ON su.linked_faculty_id = f.faculty_id
        WHERE su.username = ? AND su.role = 'Faculty' AND su.status = 'Active'
      `;
      params = [identifier];
    } else if (role === 'admin') {
      // For admin, identifier is username
      query = `
        SELECT su.*
        FROM system_user su
        WHERE su.username = ? AND su.role = 'Admin' AND su.status = 'Active'
      `;
      params = [identifier];
    } else {
      return res.status(400).json({ error: 'Invalid role' });
    }

    const [rows] = await db.execute(query, params);

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = rows[0];

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Return user info (exclude password_hash)
    const { password_hash, ...userInfo } = user;
    res.json({
      success: true,
      user: userInfo,
      role: role
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, async () => {
  await initDB();
  console.log(`Server running on port ${PORT}`);
});