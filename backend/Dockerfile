# Utiliser une image de base officielle de Node.js
FROM node:22.4.0

# Créer un répertoire de travail
WORKDIR /src

# Copier les fichiers package.json et package-lock.json
COPY ./package*.json ./

# Installer les dépendances
RUN npm install

COPY . .

# Exposer le port de l'application
EXPOSE 3001

# Démarrer l'application
CMD ["npm","run","start:dev"]
