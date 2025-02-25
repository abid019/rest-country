#!/bin/bash
cd /var/www/html
nohup npm start > app.log 2>&1 &
