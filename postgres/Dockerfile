FROM postgres:11.10

#      ↓ source folder         ↓ dest folder which will be copied to
ADD /tables/ /docker-entrypoint-initdb.d/tables/
ADD /seed/ /docker-entrypoint-initdb.d/seed/
ADD deploy_schemas.sql /docker-entrypoint-initdb.d/


