#!/bin/bash

export PGPASSWORD='786786'

echo "Configuring dragonstackdb"

sudo -u postgres dropdb dragonstackdb
sudo -u postgres createdb dragonstackdb

sudo -u postgres psql dragonstackdb < ./bin/sql/generation.sql
sudo -u postgres psql dragonstackdb < ./bin/sql/dragon.sql

echo "dragonstack configured"
