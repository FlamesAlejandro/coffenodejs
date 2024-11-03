# Imagen base
FROM node:18-alpine

# Crear directorio de la aplicación
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Instalar Prisma client y generar los archivos de cliente
RUN npx prisma generate

# Compilar el proyecto TypeScript
RUN npm run build

# Exponer el puerto en el que corre el servidor
EXPOSE 3000

# Comando para correr la aplicación
CMD ["npm", "run", "start"]
