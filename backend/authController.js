const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { db } = require('./db');

const JWT_SECRET = 'my_jwt_secret_key';

exports.signup = (req, res) => {
  const { email, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);

  db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, hash], function (err) {
    if (err) return res.status(400).json({ error: 'User already exists' });
    const token = jwt.sign({ id: this.lastID, email }, JWT_SECRET);
    res.json({ token });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
    if (err || !user) return res.status(400).json({ error: 'Invalid email or password' });

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET);
    res.json({ token });
  });
};
