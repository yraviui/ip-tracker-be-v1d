import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv';
import visitorRoutes from './router/visitorRoute.js'
import connectDB from './config/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://yraviprakash.com",
      "https://www.yraviprakash.com",
      "https://clinic-flow.yraviprakash.com",
      "https://patient-info.yraviprakash.com",
      "https://auth-task-tracker.yraviprakash.com",
    ],
    credentials: true,
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  res.send({message: 'Hello World!'});
});

app.set("trust proxy", true);

app.use("/api/visitors", visitorRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
