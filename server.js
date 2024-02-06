import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import apiRoutes from './src/routes/api.js';
import mongoose from 'mongoose';

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

// server.use(passport.initialize());

const mongoConnect = async () => {
  try {
    console.log('Conectando ao MongoDB...');
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('MongoDB successfully connected!');
  } catch (error) {
    console.log('MongoDB connection error: ', error);
  }
};

mongoConnect();

server.use(apiRoutes);

server.use((req, res) => {
  res.status(404);
  res.json({ error: 'Endpoint not found!' });
});

const errorHandler = (err, req, res) => {
  if (err.status) {
    res.status(err.status);
  } else {
    res.status(400); //Bad Request
  }
  if (err.message) {
    res.json({ error: err.message });
  } else {
    res.json({ error: 'Ocorreu algum erro' });
  }
};
server.use(errorHandler);

server.listen(process.env.PORT || 2000, error => {
  if (!error) {
    console.log('Server Running on Port 2000');
  } else {
    console.log('Error: ', error);
  }
});
