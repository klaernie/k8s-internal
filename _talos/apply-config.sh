#!/bin/bash
set -x -e

source "$(dirname "$0")/definitions.sh" || exit 254

for host in "${cp_nodes[@]}"; do
	talosctl apply-config --endpoints "$host" --nodes "$host" --file controlplane.yaml --config-patch "[{\"op\": \"add\", \"path\": \"/machine/network/hostname\", \"value\": \"$host\"}]"
done
for host in "${worker_nodes[@]}"; do
	talosctl apply-config --endpoints "$host" --nodes "$host" --file worker.yaml --config-patch "[{\"op\": \"add\", \"path\": \"/machine/network/hostname\", \"value\": \"$host\"}]"
done
