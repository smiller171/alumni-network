#!/bin/bash -ex
docker run -it -v /:/usr/src/root -w "/usr/src/root$PWD" scottmiller171/yarn:8
docker run -it -v /:/usr/src/root -w "/usr/src/root$PWD/client" scottmiller171/yarn:8
