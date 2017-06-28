FROM node:6.3.1

RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Install dependencies
WORKDIR /usr/src/app
RUN npm install

# Build the app
RUN npm run build

EXPOSE 8080

# Start the app
CMD ["npm", "run", "dev"]
