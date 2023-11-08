# Use the official Node.js 19 image as the build environment
FROM node:19 as build

# Copy the frontend code into the container

COPY . ./frontend

# Set the working directory for the build stage
WORKDIR /frontend

# Install Node.js dependencies and build the frontend
RUN npm install && npm run build


# CMD [ "npm", "run", "dev", "--", "--host"]
