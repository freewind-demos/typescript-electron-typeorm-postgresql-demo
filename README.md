TypeScript typeorm Postgresql Demo
==================================

```
brew install postgresql
brew services start postgresql
psql postgres
```

```
create user "demo";
create database "typescript-electron-typeorm-postgresql-demo";
alter user "demo" with encrypted password '123456';
grant all privileges on database "typescript-electron-typeorm-postgresql-demo" to "demo";
```

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command
