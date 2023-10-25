#!/bin/bash

cd test
npm install
npm run build
npm install -g serve
serve -s build

