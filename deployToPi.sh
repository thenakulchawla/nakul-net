#!/bin/bash

npm run build
tar czf build.tar.gz build
ipaddress='192.168.86.133'

scp build.tar.gz ubuntu@$ipaddress:~/
sleep 5
ssh ubuntu@$ipaddress "pkill -f serve"
ssh ubuntu@$ipaddress "tar zxf build.tar.gz | serve -s build"

