#!/bin/bash
kubectl create secret --namespace ldap generic openldap --from-literal=adminpassword=testpassword --dry-run=client -o yaml | kubectl apply -f -
kubectl create secret --namespace ldap generic openldap-ldif --from-file=data.ldif --dry-run=client -o yaml | kubectl apply -f -
kubectl create configmap -n ldap --from-file _schema.ldif openldap-schema --dry-run=client -o yaml | kubectl apply -f -
