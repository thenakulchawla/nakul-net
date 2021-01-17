#!/bin/bash

npm run build
tar czf build.tar.gz build

scp build.tar.gz ubuntu@192.168.86.81:~/
sleep 5
ssh ubuntu@192.168.86.81 "pkill -f serve"
ssh ubuntu@192.168.86.81 "tar zxf build.tar.gz | serve -s build"

