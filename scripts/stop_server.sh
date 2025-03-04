#!/bin/bash

echo "Stopping any process using port 4173 (Vite preview)..."
sudo fuser -k 4173/tcp || true

echo "Any old process stopped (if any)."
