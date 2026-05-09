FROM node:18-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source files and build
COPY . .
RUN npm run build

# -----------------------------------------------------
# Use Node to serve the build
FROM node:18-alpine

WORKDIR /app

# Install a simple static server globally
RUN npm install -g serve

# Copy only the build output from the first stage
COPY --from=build /app/build ./build

# Expose port 3000
EXPOSE 3000

# Serve the app
CMD ["serve", "-s", "build", "-l", "3000"]
