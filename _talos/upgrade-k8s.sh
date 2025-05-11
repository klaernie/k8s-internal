#!/bin/bash

source "$(dirname "$0")/definitions.sh" || exit 254

talosctl upgrade-k8s -n $cp_nodes -e $cp_nodes --to $kubernetesVersion
