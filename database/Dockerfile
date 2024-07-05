# Image utilisé de docker hub avec précision de la version
FROM postgres:16.3

# Définition des variables d'environnement dans un .env directement

# Utiliser le fichier d'init des données de la bdd 
COPY ./init-db.sql /docker-entrypoint-initdb.d/

# Permet de se connecter au port par défaut 
EXPOSE 5432

# Commande par défaut pour lancer PostgreSQL
CMD ["postgres"]
