#!/usr/bin/bash
COMPONENT=$1
PROPS=$2
if [ -z "$COMPONENT" ]; then
  echo "Usage: $0 <component> [props-as-json]"
  exit 1
fi
if [ -z "$PROPS" ]; then
  PROPS="{}"
fi
curl --unix-socket /tmp/bunnie.sock http://127.0.0.1/ -X POST -d "{\"component\":\"$COMPONENT\",\"props\":$PROPS}"
