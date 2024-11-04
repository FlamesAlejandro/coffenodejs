import app from './app';
import connectMongo from './config/database/mongoose';
import prisma from './config/database/prisma';          // Conexión a MySQL con Prisma

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectMongo();
    await prisma.$connect(); 

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
