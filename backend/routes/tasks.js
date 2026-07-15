// backend/routes/tasks.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Helper to get current timestamp
function now() {
  return new Date().toISOString();
}

// GET /api/tasks - list all tasks
router.get('/', (req, res) => {
  db.all('SELECT * FROM tasks ORDER BY position ASC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// POST /api/tasks - create task
router.post('/', (req, res) => {
  const { title, description, status, position } = req.body;
  const sql = `INSERT INTO tasks (title, description, status, position, created_at, updated_at)
               VALUES (?,?,?,?,?,?)`;
  const params = [title, description || '', status || 'todo', position || 0, now(), now()];
  db.run(sql, params, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    const newId = this.lastID;
    db.get('SELECT * FROM tasks WHERE id = ?', [newId], (err2, row) => {
      if (err2) return res.status(500).json({ error: err2.message });
      res.status(201).json(row);
    });
  });
});

// PUT /api/tasks/:id - update task
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, status, position } = req.body;
  const sql = `UPDATE tasks SET title = ?, description = ?, status = ?, position = ?, updated_at = ? WHERE id = ?`;
  const params = [title, description, status, position, now(), id];
  db.run(sql, params, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    db.get('SELECT * FROM tasks WHERE id = ?', [id], (err2, row) => {
      if (err2) return res.status(500).json({ error: err2.message });
      res.json(row);
    });
  });
});

// DELETE /api/tasks/:id - delete task
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM tasks WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, deletedId: id });
  });
});

module.exports = router;
