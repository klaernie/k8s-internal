#!/bin/bash
set -x -e

for host in \
	talos-api01.ak-online.be. \
	talos-api02.ak-online.be. \
	talos-api03.ak-online.be. \
	talos-w01.ak-online.be. \
	talos-w02.ak-online.be. \
	talos-w03.ak-online.be. \
	talos-w04.ak-online.be. \
	talos-w05.ak-online.be.
do
	talosctl upgrade --nodes $host --wait --image factory.talos.dev/installer/94114f5dbe67331c4f9b2be0eac92deb1575d3edd3cd2a59ec1731c2ad430d78:v1.8.4
done
