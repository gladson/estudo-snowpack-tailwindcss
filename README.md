# Estudo - Snowpack + Tailwind CSS

## Instalação
> comando
```shell
❯ npm install
```
> resultado

```shell
audited 1284 packages in 5.982s

77 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Rodar projeto
> comando
```shell
❯ npm run start
```
> resultado

```shell
snowpack

  http://localhost:8080 • http://192.168.0.106:8080
  Server started in 35ms. Building...

▼ Console

[snowpack] Nothing to install.
```

## Para desenvolvimento

### Instalação do clean code

> comando

```shell
❯ npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier core-js
```

> resultado

```shell
+ eslint-plugin-prettier@3.3.1
+ eslint-config-prettier@7.2.0
+ eslint@7.19.0
+ prettier@2.2.1
+ core-js@3.8.3
added 68 packages from 57 contributors and audited 258 packages in 14.842s
...
found 0 vulnerabilities
```

### Snowpack

#### Instalar

> comando

```shell
❯ npm install -D snowpack
```

> resultado

```shell
+ snowpack@3.0.11
updated 1 package and audited 95 packages in 3.245s
...
found 0 vulnerabilities
```

#### Instalar plugin

> comando

```shell
❯ npm install -D @snowpack/plugin-postcss postcss-cli @snowpack/plugin-webpack cssnano
```

> resultado

```shell
+ postcss-cli@8.3.1
+ @snowpack/plugin-postcss@1.1.0
+ @snowpack/plugin-webpack@2.3.0
added 95 packages from 64 contributors, updated 1 package and audited 190 packages in 18.315s
...
found 0 vulnerabilities
```

### Tailwind CSS

#### Instalar

> comando

```shell
❯ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

> resultado

```shell
+ autoprefixer@10.2.4
+ tailwindcss@2.0.2
+ postcss@8.2.4
updated 3 packages and audited 95 packages in 7.977s
...
found 0 vulnerabilities
```

#### Inicializar

> comando

```shell
❯ npx tailwindcss init -p
```

> resultado

```shell
   tailwindcss 2.0.2

   ✅ Created Tailwind config file: tailwind.config.js
   ✅ Created PostCSS config file: postcss.config.js
```
