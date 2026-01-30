const express = require('express');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
