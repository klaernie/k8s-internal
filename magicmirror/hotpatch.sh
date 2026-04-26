#!/bin/bash
set -e
set -x
echo "this is hotpatch running"
patch -u -i /opt/hotpatch/4092.patch --verbose -p 1
exec "$@"
