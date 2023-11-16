<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## 프로젝트 설명

NestJS 프레임워크 기본적인 사용을 위한 Controller, Provider, Module에 대한 개발 기본적인 개발 진행.

nest new project-name으로 프로젝트 생성 후 기본 구조 확인.
express, fastify 두 가지 프레임워크 위에서 동작하는 nestJS의 구조 이해

## Controller

Controller는 애플리케이션의 url 처리(라우팅 및 요청-응답)를 담당한다. @Controller 데코레이터를 사용하여 클래스에 컨트롤러를 선언하고 @Get, @Post, @Delete, @Patch, @Put 등의 method 데코레이터를 사용하여 각각의 요청에 맞는 함수를 구현하여 응답하는 것을 목적으로 한다.

## Module

Module은 프레임워크에서 사용 될 것들을 정하여 프레임워크가 처리하도록 세팅하는 기능을 담당한다.
imports, controllers, providers 를 배열 형태로 받아 선언하여 사용한다. app.module에 선언 되지 않은 하위 애플리케이션들은 동작하지 않는다.

## Providers

Providers의 대표적인 예는 Service이다. Provider의 가장 큰 특징은 @Injectable로 선언되어 있다는 것이다. 이 선언으로 인하여, Dependency Injection을 개발자가 하는게 아니라 프레임워크에서 생성하여, 필요한 클래스에 넣어주는 역할을 한다.

Service는 실제 로직처리를 담당한다. Controller를 통해 들어온 요청들을 service에서 처리하여, 값을 추가, 삭제 등 가공하여, 데이터를 돌려주던가 에러처리를 진행한다.

서비스 외에 repository, factory 등 주입되어 사용 되는 클래스들이 포함된다.

## MiddleWare

NestJS에서 추가적으로 지원하는 기능으로 HTTP 요청과 응답의 처리를 중간에 가로채고 조작할 수 있는 기능을 제공하는 중간 소프트웨어를 말한다.
현재 프로젝트에서는 app.useGlobalPipe를 사용하여 ValidationPipe를 사용하고 있다.
whilelist, forbidNonWhiteListed 등을 사용하여 요청에 대한 중간 처리를 할 수 있고, transform을 통해 string으로 들어오는 id 값을 number형태로 자동변환 시키고 있다.

