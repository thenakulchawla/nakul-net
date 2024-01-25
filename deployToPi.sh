#!/bin/bash

npm run build
tar czf build.tar.gz build

scp build.tar.gz kulcha@rpi1.local:~/
sleep 5
ssh kulcha@rpi1.local "pkill -f serve"
ssh kulcha@rpi1.local "tar zxf build.tar.gz | serve -s build"

