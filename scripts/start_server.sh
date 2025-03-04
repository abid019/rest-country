#!/bin/bash

echo "Starting the Vite preview server to serve built files..."

cd /var/www/country/deploy || exit 1

# Use serve or any other file server (replace if you prefer nginx/apache)
nohup npx serve -s . -l 4173 > /var/log/country-app.log 2>&1 &

echo "Server started on port 4173."
