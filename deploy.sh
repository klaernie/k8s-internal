#!/bin/bash
cd "$(dirname "$0")"
kustomize build . --enable-helm | kubectl apply -f -
