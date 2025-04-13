const express = require('express');
const cors = require('cors');
const authRoutes = require('./authRoutes');
const categoryRoutes = require('./categoryRoutes');
const { initDB } = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);

initDB();

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

