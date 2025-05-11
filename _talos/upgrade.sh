#!/bin/bash
set -x -e

# renovate: datasource=github-releases depName=talos packageName=siderolabs/talos
targetVersion=v1.9.6

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
	currentVersion="$(talosctl -n $host version --short |grep Tag | awk '{print $2}')"
	if [ "$currentVersion" = "$targetVersion" ]; then
		continue;
	fi
	talosctl upgrade --nodes $host --wait --image factory.talos.dev/installer/94114f5dbe67331c4f9b2be0eac92deb1575d3edd3cd2a59ec1731c2ad430d78:$targetVersion
done
