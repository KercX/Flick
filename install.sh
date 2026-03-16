#!/bin/bash

# Colors for output
BLUE='\033[0;34m'
GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${BLUE}⚡ FLICK OSINT: Global Installation Starting...${NC}"

# 1. Install Python dependencies
echo "[*] Installing Python requirements..."
pip install -r requirements.txt --quiet

# 2. Compile C++ Core
echo "[*] Compiling C++ High-Speed Scanner..."
g++ -O3 main.cpp -o flick-cpp-core

# 3. Build Go Network Module
echo "[*] Building Go Concurrency Module..."
go build -o flick-go-engine main.go

# 4. Compile Java Backend
echo "[*] Compiling Java Data Module..."
javac Main.java

# 5. Setup Frontend (Docs)
echo "[*] Preparing Web Dashboard (Docs)..."
cd docs && npm install --quiet && cd ..

echo -e "${GREEN}✅ FLICK is successfully installed and ready to hunt!${NC}"
