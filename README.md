
# http-cache

http-cache is the [Souin](https://github.com/darkweak/souin) SaaS web UI platform. It allow users to setup and manage the Souin HTTP cache on a proxied server.


## Authors

- [@darkweak](https://github.com/darkweak)
- [@ReyalWesley](https://github.com/ReyalWesley)


## Dependencies

* PHP >= 8.1

* Node.js v18.16.0

* PostgreSQL v15.3


## Install project

Clone the project

```bash
  git clone https://github.com/ReyalWesley/httpCache
```

Go to the project directory

```bash
  cd httpCache
```

### Docker

This project uses docker to deploy so before the next steps, make sur to install docker [here](https://docs.docker.com/engine/install/).

You can now run all the containers using

in dev:
```bash
  make start-dev
```

in prod:
```bash
  make start-prod
```

### Install dependencies

on api:
```bash
  composer install
```

on pwa:
```bash
  pnpm install
```

## API

This project uses API Platform, here is the CDM of the project:

![CDM](https://github.com/reyalwesley/httpcache/blob/main/docs/cdm.png)

You can fill the API with fixtures using:

```bash
  make reset-db
```

## JWT Authentication

This project uses the JWT Authentication so you need to generate the RSA keys using:

```bash
  make generate-jwt
```

## Running Tests

To run tests, run the following command

PHPstan:
```bash
  make analyse
```

PHP-cs-fixer:
```bash
  make cs-fixer
```


## Environment variable

To use this project, you need to configure some environment variables in the .env files of both the API and PWA.

In pwa: 
- DOMAIN: `http://localhost`
- CONTACT_EMAIL: `foo@bar.com`
- ADDRESS: `somewhere`

In api:
- APP_ENV=dev
- APP_SECRET=!ChangeMe!
- DATABASE_URL="postgresql://app:!ChangeMe!@127.0.0.1:5432/app?serverVersion=15&charset=utf8"


## Contributing

Contributions are always welcome!

See `.github/contributing.md` for ways to get started.

