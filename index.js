const express = require('express');
const app = express();

// DataBase Connectiion
const connectdb = require('./config/database.js');
connectdb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('hello');
});

// router api
const registerRouter = require('./routers/user.router.js');
// api
app.use('/user/', registerRouter);

require('dotenv').config();
1;
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at port http://localhost:${PORT}`);
});
