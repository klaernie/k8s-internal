#!/bin/bash
set -x -e

for host in \
	talos-api01 \
	talos-api02 \
	talos-api03 \
	talos-w01 \
	talos-w02 \
	talos-w03 \
	talos-w04 \
	talos-w05
do
	talosctl upgrade --nodes $host --wait --image factory.talos.dev/installer/94114f5dbe67331c4f9b2be0eac92deb1575d3edd3cd2a59ec1731c2ad430d78:v1.8.4
done
