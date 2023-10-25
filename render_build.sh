#!/bin/bash

cd test
npm install
npm run build
serve -s build

