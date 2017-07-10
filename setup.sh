#!/bin/bash -ex
# need to run each install twice because of an npm bug
docker run -v "$PWD":/usr/src/app -w /usr/src/app node:8.1.3 npm install
docker run -v "$PWD":/usr/src/app -w /usr/src/app node:8.1.3 npm install
docker run -v "$PWD":/usr/src/app -w /usr/src/app/client node:8.1.3 npm install
docker run -v "$PWD":/usr/src/app -w /usr/src/app/client node:8.1.3 npm install
