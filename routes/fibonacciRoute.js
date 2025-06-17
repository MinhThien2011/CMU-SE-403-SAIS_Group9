import express from 'express';
import { fibonacci } from '../services/fibonacci.js';

const router = express.Router();

// GET: /fibonacci?count=10
router.get('/fibonacci', (req, res) => {
  const count = parseInt(req.query.count);

  if (isNaN(count) || count <= 0) {
    return res.status(400).json({ error: 'Tham số count phải là số nguyên dương' });
  }

  const sequence = fibonacci(count);
  res.json({ sequence });
});

// POST: /fibonacci với body { "count": 10 }
router.post('/fibonacci', (req, res) => {
  const count = parseInt(req.body.count);

  if (isNaN(count) || count <= 0) {
    return res.status(400).json({ error: 'Tham số count phải là số nguyên dương' });
  }

  const sequence = fibonacci(count);
  res.json({ sequence });
});

export default router;