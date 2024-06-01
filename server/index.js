require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const {notFound, errorHandler} = require('./middleware/errorMiddleware')

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');


const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)

// Route for root endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Middleware for handling unsupported routes
app.use(notFound)
// Middleware for handling errors
app.use(errorHandler)


async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('connected to mongodb'); 
  } catch (error) {
    console.log(error);
  }
}

connect();


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
