#!/bin/bash
set -e

# renovate: datasource=github-releases depName=talos packageName=siderolabs/talos
talosVersion=1.9.6

wget https://github.com/siderolabs/talos/releases/download/v$talosVersion/talosctl-linux-amd64 -O "$HOME/bin/installs/talosctl-$talosVersion"
chmod +x "$HOME/bin/installs/talosctl-$talosVersion"
ln -sf installs/talosctl-$talosVersion "$HOME/bin/talosctl"

echo "installed talosctl version $talosVersion"
