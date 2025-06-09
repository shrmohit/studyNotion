const express = require('express');
const app = express();

// DataBase Connectiion
const connectdb = require('./config/database.js');
connectdb();

require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at port http://localhost${PORT}`);
});
