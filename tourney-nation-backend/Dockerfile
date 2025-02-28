# Use the official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (ensure dotenv is included)
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose correct port dynamically
ARG PORT=5000
ENV PORT=$PORT
EXPOSE $PORT

# Define the command to run the application
CMD ["node", "index.js"]
