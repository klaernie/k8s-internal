#!/bin/bash

cd $(dirname "$0")

if ! which sops >/dev/null 2>&1 ; then
	echo "no sops available - aborting"
	exit 1
fi
if ! which talosctl >/dev/null 2>&1 ; then
	echo "no talosctl available - aborting"
	exit 1
fi
if ! which yq >/dev/null 2>&1 ; then
	echo "no yq available - aborting"
	exit 1
fi

if test ! -f secrets.yaml; then
	echo "decrypting secrets.enc.yaml with sops..."
	sops -d secrets.enc.yaml > secrets.yaml
fi

echo "deleting controlplane.yaml, worker.yaml and talosconfig"
rm controlplane.yaml worker.yaml talosconfig

talosctl gen config \
	"$@" \
	--with-secrets secrets.yaml \
	--kubernetes-version 1.30.3 \
	--config-patch @patch-all.yaml \
	--config-patch-control-plane @patch-controlplane.yaml \
	--config-patch-worker @patch-worker.yaml \
	talos \
	https://talos.ak-online.be:6443

yq --from-file patch-talosconfig.yaml --inplace talosconfig
