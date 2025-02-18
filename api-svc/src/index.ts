import pkg from '@prisma/client';
const { PrismaClient } = pkg;

import express from 'express';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://medication-manager.netlify.app'  // Update this with your Netlify domain
    : 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

// trigger build with comment

app.use(cors(corsOptions));
app.use(express.json());

app.get('/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    await prisma.$disconnect(); // Clean up connection
    res.json({ status: 'ok', database: 'connected' });
  } catch (error: any) {
    await prisma.$disconnect(); // Clean up on error too
    res.status(500).json({ 
      status: 'error', 
      database: 'disconnected',
      error: error.message 
    });
  }
});

// Only start the server if we're not in Lambda
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export { app };