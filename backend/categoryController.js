const { db } = require('./db');
const fs = require('fs');
const path = require('path');

exports.getCategories = (req, res) => {
  db.all('SELECT * FROM categories', (err, rows) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch' });
    res.json(rows);
  });
};

exports.addCategory = (req, res) => {
  const { name, itemCount, imageBase64 } = req.body;
  let imageUrl = '';

  if (imageBase64) {
    const base64Data = imageBase64.replace(/^data:image\/png;base64,/, '');
    const fileName = `${Date.now()}.png`;
    const filePath = path.join(__dirname, '../uploads', fileName);

    fs.writeFileSync(filePath, base64Data, 'base64');
    imageUrl = `/uploads/${fileName}`;
  }

  db.run(
    `INSERT INTO categories (name, itemCount, imageUrl) VALUES (?, ?, ?)`,
    [name, itemCount, imageUrl],
    function (err) {
      if (err) return res.status(500).json({ error: 'Failed to add category' });
      res.json({ id: this.lastID, name, itemCount, imageUrl });
    }
  );
};
