// import 'dotenv/config';
// import express from 'express'
// import cors from 'cors'
// import userRouter from './routes/userRoutes.js';
// import connectDB from './configs/mongodb.js';
// import imageRouter from './routes/imageRoutes.js';

// // App Config
// const PORT = process.env.PORT || 4000
// const app = express();
// await connectDB()

// // Intialize Middlewares
// app.use(express.json())
// app.use(cors())

// // API routes
// app.use('/api/user',userRouter)
// app.use('/api/image',imageRouter)

// app.get('/', (req,res) => res.send("API Working"))

// app.listen(PORT, () => console.log('Server running on port ' + PORT));

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRoutes.js';
import connectDB from './configs/mongodb.js';
import imageRouter from './routes/imageRoutes.js';

// App Config
const PORT = process.env.PORT || 4000;
const app = express();

const startServer = async () => {
  // Connect to the database
  await connectDB();

  // Initialize Middlewares
  app.use(express.json());
  app.use(cors());

  // API routes
  app.use('/api/user', userRouter);
  app.use('/api/image', imageRouter);

  app.get('/', (req, res) => res.send('API Working'));

  // Start the server
  app.listen(PORT, () => console.log('Server running on port ' + PORT));
};

startServer();
