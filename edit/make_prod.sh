#!/bin/sh

# npm install --save-dev babelify @babel/core
#npx browserify components/* -o app.min.js -t babelify  --presets @babel/preset-env @babel/preset-react
npx browserify components/* -t babelify --outfile app.min.js
#browserify components/* -o app.min.js [ babelify --presets [ @babel/preset-env @babel/preset-react ] --plugins [ @babel/plugin-transform-class-properties ] ]