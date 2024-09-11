FROM node:14.17.0-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Command to run the application
FROM node:14.17.0-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

# Ensure we're in the correct directory when the container starts
CMD ["/bin/sh", "-c", "cd /app && npm start"]