# Use the official Node.js base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the React app port
EXPOSE 3000

# Run the React app
CMD ["npm", "start"]

# commands to build and run docker

# docker build -t mft-frontend-react-hackathon-v2 .
# docker run -p 3000:3000 mft-frontend-react-hackathon-v2