require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json({ extended: true }));
// app.use(urlencoded({extended: true}));
app.use(cors());

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('connected to mongodb');
  } catch (error) {
    console.log(error);
  }
}

connect();

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
