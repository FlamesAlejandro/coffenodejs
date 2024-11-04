import prisma from '../config/database/prisma';
import bcrypt from 'bcrypt';

const hashedPassword = async (pass: string) => { 
   return await bcrypt.hash(pass, 10);
}

const seedUsers = async () => {
  try {
    let adminPass = hashedPassword('admin123')
    const admin = await prisma.user.create({
      data: {
        name: 'Admin User',
        email: 'admin@example.com',
        password: String(adminPass),
        role: 'admin',
      },
    });

    let clientPass = hashedPassword('client123')
    const client = await prisma.user.create({
      data: {
        name: 'Client User',
        email: 'client@example.com',
        password: String(clientPass),
        role: 'user',
      },
    });

    console.log('Usuarios creados:', { admin, client });
  } catch (error) {
    console.error('Error al crear usuarios:', error);
  } finally {
    await prisma.$disconnect();
  }
};

seedUsers();