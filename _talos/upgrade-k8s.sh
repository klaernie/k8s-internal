#!/bin/bash

# renovate: datasource=github-releases depName=talos-k8s packageName=siderolabs/kubelet
kubernetesVersion=1.30.3

talosctl upgrade-k8s -n talos-api01 -e talos-api01 --to $kubernetesVersion
