#!/bin/bash
set -x -e

for host in \
	talos-api01 \
	talos-api02 \
	talos-api03
do
	talosctl apply-config --nodes $host --file controlplane.yaml
done
for host in \
	talos-w01 \
	talos-w02 \
	talos-w03 \
	talos-w04 \
	talos-w05
do
	talosctl apply-config --nodes $host --file worker.yaml
done
