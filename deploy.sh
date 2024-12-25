#!/bin/bash
caller_dir=$( pwd -P )
my_dir=$( cd "$(dirname "$0")" || exit 255; pwd -P ) || exit
if ! [[ "$caller_dir" = "$my_dir"* ]]; then
	cd "$my_dir" || exit 255
fi
kustomize build . --enable-helm | kubectl apply --server-side -f - "$@"
