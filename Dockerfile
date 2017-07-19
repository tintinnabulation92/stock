FROM node 6.11.1

RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Install dependencies
WORKDIR /usr/src/app
RUN npm install

# Build the app
RUN npm run build

EXPOSE 8080

# Start the app
CMD ["npm", "run", "start"]

ENV DOCKER_BACKEND_API https://stock.jitsolutions.pl/stock-bd/api
ENV CONTEXT_PATH /stock/


