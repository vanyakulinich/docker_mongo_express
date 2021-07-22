
FROM node:lts-alpine

WORKDIR /var/www/backend

# Copy local code to the container image.
COPY . .

RUN npm install


CMD ["npm", "run", "start:dev"]