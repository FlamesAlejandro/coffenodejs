import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
import userRoutes from './routes/user.routes';

dotenv.config();

const app = express();

// Middlewares de seguridad
app.use(helmet());
app.use(compression());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Límite de solicitudes por IP
});
app.use(limiter);

app.use(express.json());

// Documentación de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', userRoutes);

export default app;
