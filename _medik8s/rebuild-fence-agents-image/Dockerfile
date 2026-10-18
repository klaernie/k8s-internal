FROM quay.io/medik8s/fence-agents-remediation-operator:v0.8.0
USER root
RUN	set -e -x \
	&& curl https://raw.githubusercontent.com/ClusterLabs/fence-agents/refs/heads/main/agents/pve/fence_pve.py \
	| sed -e 's|@FENCEAGENTSLIBDIR@|/usr/share/fence|' -e 's|@PYTHON@|/usr/bin/python3|' >/usr/sbin/fence_pve \
	&& chmod +x /usr/sbin/fence_pve
USER 65532:65532
