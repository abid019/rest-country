#!/bin/bash
sudo yum update -y
sudo yum install -y nodejs npm
cd /var/www/html
npm install
