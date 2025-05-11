#!/bin/bash
set -x -e

for host in \
	talos-api01 \
	talos-api02 \
	talos-api03
do
	talosctl apply-config --endpoints $host --nodes $host --file controlplane.yaml --config-patch "[{\"op\": \"add\", \"path\": \"/machine/network/hostname\", \"value\": \"$host\"}]"
done
for host in \
	talos-w01 \
	talos-w02 \
	talos-w03 \
	talos-w04 \
	talos-w05
do
	talosctl apply-config --endpoints $host --nodes $host --file worker.yaml --config-patch "[{\"op\": \"add\", \"path\": \"/machine/network/hostname\", \"value\": \"$host\"}]"
done
