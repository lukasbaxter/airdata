#!/bin/bash
# deploy.sh

# Try to commit any changes
git add .
git commit -m "New build deployment"
git push

# Build and deploy
npm run build
firebase deploy
