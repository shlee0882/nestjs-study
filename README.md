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

## 설치방법

```bash
$ npm install

### 초기 셋팅
# nest 프로젝트 설치
$ npm i -g @nestjs/cli
$ nest new nestjs-study

# controller, service 생성
$ nest generate controller books
$ nest generate service books

# type orm mysql 설치
$ npm install --save @nestjs/typeorm typeorm mysql

# 환경변수 설정파일 
$ npm install dotenv

# config env파일 불러오기 위한 설치
$ npm install @nestjs/config

# google login 위한 passport-google-oauth20 설치
$ npm install --save @nestjs/passport passport passport-google-oauth20
$ npm install --save-dev @types/passport-google-oauth20
$ npm install @nestjs/jwt
$ npm install @nestjs/passport

# swagger 설치
$ npm install --save @nestjs/swagger swagger-ui-express


```
## Swagger 테스트

nestjs db는 google cloud mysql 사용
google cloud app engine에 nestjs 플젝 서버 올리기 성공

- 개발: https://nest-project-391903.du.r.appspot.com/api-docs#/
- 로컬 : http://localhost:3000/api-docs#/

<br>

## 실행 방법

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 블로그 포스팅
- [NestJs 토이 프로젝트 구성해보기 - 1](https://shlee0882.tistory.com/296)
- [NestJs 토이 프로젝트 구성해보기 - 2](https://shlee0882.tistory.com/297)
