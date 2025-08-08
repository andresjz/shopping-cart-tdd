# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install bash (Alpine uses ash by default)
RUN apk add --no-cache bash

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Change ownership of the app directory
RUN chown -R nodejs:nodejs /app
USER nodejs

# Expose the port
EXPOSE 4000

# Set the entrypoint to bash for development
ENTRYPOINT ["/bin/bash"]
