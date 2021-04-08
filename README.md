TypeScript electron typeorm Postgresql Demo
==================================

在Electron中运行typeorm，会遇到各种问题，原因是typeorm的package.json中定义了`browser`:

```
"browser": {
    "./browser/driver/aurora-data-api/AuroraDataApiDriver.js": "./browser/platform/BrowserDisabledDriversDummy.js",
    "./browser/driver/cockroachdb/CockroachDriver.js": "./browser/platform/BrowserDisabledDriversDummy.js",
    "./browser/driver/postgres/PostgresDriver.js": "./browser/platform/BrowserDisabledDriversDummy.js",
    "./browser/driver/oracle/OracleDriver.ts": "./browser/platform/BrowserDisabledDriversDummy.js",
    "./browser/driver/sap/SapDriver.ts": "./browser/platform/BrowserDisabledDriversDummy.js",
  
```

当我们在electron中执行时，webpack会认为它在web环境，从而读取package.json中的`browser`，然后把文件导入替换为了浏览器的假代码。

而在electron中，我们恰好要使用的就是原始的node版本。

为了让webpack避开browser，我们需要在 `rendererProcessConfig.ts` 中，指定：

```
// !!! The default value is `browser`, we have to override it to let webpack ignore
    // the `browser` fields in typeorm package.json
    aliasFields: ['main']
```

另外，不知道为什么，typeorm找不到ormconfig.json：

```
Error: Cannot find module 'demos/typescript-electron-typeorm-postgresql-demo/ormconfig.json'
```

所以我只能在`createConnection`中指定参数。

数据库准备：

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
