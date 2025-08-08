#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Shopping Cart TDD Development Environment${NC}"
echo -e "${BLUE}Available commands:${NC}"
echo -e "  ${GREEN}npm start${NC}     - Start the application with nodemon"
echo -e "  ${GREEN}npm test${NC}      - Run tests with Jest"
echo -e "  ${GREEN}npm install${NC}   - Install new dependencies"
echo -e ""
echo -e "${BLUE}Project structure:${NC}"
echo -e "  📁 /app          - Your project root"
echo -e "  📁 /app/src      - Source files"
echo -e "  📄 /app/app.js   - Main application file"
echo -e ""
echo -e "${GREEN}Ready for development! 🎯${NC}"

# Keep shell open
exec "$@"
