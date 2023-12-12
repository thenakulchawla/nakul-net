#!/bin/bash

npm run build
tar czf build.tar.gz build
ipaddress='192.168.86.210'

scp build.tar.gz storageWorker@$ipaddress:~/
sleep 5
ssh storageWorker@$ipaddress "pkill -f serve"
ssh storageWorker@$ipaddress "tar zxf build.tar.gz | serve -s build"

