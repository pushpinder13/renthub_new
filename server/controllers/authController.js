const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const users =[]

const JWT_SECRET = 'your_jwt_secret_key'; 

exports.signup = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Check if user already exists
  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    return res.status(409).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = { id: users.length + 1, username, password: hashedPassword };
  users.push(newUser);

  const token = jwt.sign({ id: newUser.id, username: newUser.username }, JWT_SECRET, {
    expiresIn: '1h',
  });

  return res.status(201).json({ message: 'User created successfully', token });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
    expiresIn: '1h',
  });

  return res.status(200).json({ message: 'Login successful', token });
};
