#!/bin/bash

source "$(dirname "$0")/definitions.sh" || exit 254

talosctl upgrade-k8s -n ${cp_nodes[0]} -e ${cp_nodes[0]} --to $kubernetesVersion
