docker run --detach --rm --name openldap \
	--env LDAP_ADMIN_USERNAME=admin \
	--env LDAP_ADMIN_PASSWORD=testpassword \
	--env LDAP_EXTRA_SCHEMAS=openssh-openldap \
	--env LDAP_ROOT=dc=ak-online,dc=be \
	bitnami/openldap:latest
