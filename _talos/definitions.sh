#!/bin/bash

export cp_nodes=(
	"talos-api01"
	"talos-api02"
	"talos-api03"
)

export worker_nodes=(
	"talos-w01"
	"talos-w02"
	"talos-w03"
	"talos-w04"
	"talos-w05"
)


# renovate: datasource=github-releases depName=talos packageName=siderolabs/talos
export talosVersion=1.10.1

# renovate: datasource=github-releases depName=talos-k8s packageName=siderolabs/kubelet
export kubernetesVersion=1.32.0
