// db.js – SQLite database wrapper
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Database file inside backend folder
const dbPath = path.resolve(__dirname, 'tasks.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Failed to connect to DB:', err.message);
  } else {
    console.log('Connected to SQLite DB at', dbPath);
  }
});

// Initialize tasks table if not exists
const initSql = `
CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'todo',
  position INTEGER NOT NULL DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);
`;

db.exec(initSql, (err) => {
  if (err) {
    console.error('Failed to create tasks table:', err.message);
  } else {
    console.log('Tasks table ensured');
  }
});

module.exports = db;
