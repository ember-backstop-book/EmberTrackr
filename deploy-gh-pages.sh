#!/bin/bash

# Build
echo "Building the app ..."
brunch build

# Save it off
cp -R public /tmp/embertrackr
rm -Rf public

# Change branches
git checkout gh-pages

# Commit the build
cp -Rf /tmp/embertrackr/* .
git add .
git commit -a -m "Updating the tracker build"

rm -Rf /tmp/embertrackr

# Push 
git push origin gh-pages

# Checkout master
git checkout master
