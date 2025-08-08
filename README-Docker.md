# Shopping Cart TDD - Docker Development Setup

This setup provides a containerized development environment for the Shopping Cart TDD project.

## Quick Start

### Using Docker Compose (Recommended)

1. **Build and start the container:**
   ```bash
   docker-compose up -d
   ```

2. **Enter the development shell:**
   ```bash
   docker-compose exec shopping-cart-app bash
   ```

3. **Inside the container, you can run:**
   ```bash
   # Start the application
   npm start

   # Run tests
   npm test

   # Install new dependencies
   npm install <package-name>
   ```

### Using Docker directly

1. **Build the image:**
   ```bash
   docker build -t shopping-cart-tdd .
   ```

2. **Run with volume mounting:**
   ```bash
   docker run -it --rm \
     -p 4000:4000 \
     -v $(pwd):/app \
     -v shopping-cart-node-modules:/app/node_modules \
     shopping-cart-tdd
   ```

## Features

- ✅ **Live Code Updates**: Changes to your local files are immediately reflected in the container
- ✅ **Shell Access**: Direct bash access for development
- ✅ **Port Forwarding**: App accessible at `http://localhost:4000`
- ✅ **Isolated Dependencies**: Node modules are kept in a Docker volume
- ✅ **Development Tools**: Jest, Nodemon, and all dev dependencies available

## Development Workflow

1. Start the container with `docker-compose up -d`
2. Enter the shell with `docker-compose exec shopping-cart-app bash`
3. Make changes to your code in your local editor
4. Run tests or start the app inside the container
5. Changes are automatically reflected due to volume mounting

## Stopping the Environment

```bash
# Stop the container
docker-compose down

# Stop and remove volumes (if you want to reset node_modules)
docker-compose down -v
```

## Troubleshooting

- If you encounter permission issues, the container runs as a non-root user (nodejs)
- Node modules are stored in a Docker volume to avoid conflicts between host and container
- If you need to rebuild after changing dependencies, use `docker-compose build`
