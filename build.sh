#!/bin/bash

cd frontend
npm install
npm run build
mv dist ../dist

cd ../backend
npm install
node app.js
