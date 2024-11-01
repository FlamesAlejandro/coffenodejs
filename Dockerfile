# Usa una imagen de Node como base
FROM node:18

# Crea y establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Compila el proyecto TypeScript
RUN npm run build

# Expone el puerto en el que se ejecutará la app
EXPOSE 3000

# Define el comando para iniciar la aplicación
CMD ["npm", "start"]
