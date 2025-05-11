#!/bin/bash
set -e

source "$(dirname "$0")/definitions.sh" || exit 254

wget https://github.com/siderolabs/talos/releases/download/v$talosVersion/talosctl-linux-amd64 -O "$HOME/bin/installs/talosctl-$talosVersion"
chmod +x "$HOME/bin/installs/talosctl-$talosVersion"
ln -sf installs/talosctl-$talosVersion "$HOME/bin/talosctl"

echo "installed talosctl version $talosVersion"
