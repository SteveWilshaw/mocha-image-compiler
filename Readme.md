# Mocha Image Compiler

Compiler for Mocha to allow for webpack-like importing of images, i.e

    var image = require('../images/logo.png');

## Install

    npm install --save-dev mocha-image-compiler

## Usage

    mocha --compilers .:mocha-image-compiler

if using babel as well, you can specify multiple compilers

    mocha --compilers js:babel/register,.:mocha-image-compiler