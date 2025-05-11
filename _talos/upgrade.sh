#!/bin/bash
set -x -e

source "$(dirname "$0")/definitions.sh" || exit 254

targetVersion=v${talosVersion}

for host in \
	${cp_nodes[@]} \
	${worker_nodes[@]}
do
	currentVersion="$(talosctl -n $host version --short |grep Tag | awk '{print $2}')"
	if [ "$currentVersion" = "$targetVersion" ]; then
		continue;
	fi
	talosctl upgrade --nodes $host --wait --image factory.talos.dev/installer/94114f5dbe67331c4f9b2be0eac92deb1575d3edd3cd2a59ec1731c2ad430d78:$targetVersion
done
