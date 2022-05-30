# LZO API [PagSeguro](https://dev.pagseguro.uol.com.br/)

[![Sponsor][sponsor-badge]][sponsor]
[![Commitizen friendly][commitizen-badge]][commitizen]
[![TypeScript version][ts-badge]][typescript-4-6]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][license]
[![Build Status - GitHub Actions][gha-badge]][gha-ci]

## Before install this package

Create file `.npmrc` in root folder of your  project:

```.npmrc
@guilhermesantos001:registry=https://npm.pkg.github.com
```

## Getting Started

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].

> Read the documentation in the [Wiki][wiki]

### Clone repository

To clone the repository, use the following commands:

```sh
git clone https://github.com/GuilhermeSantos001/lzo_api_pagseguro.git
cd lzo_api_pagseguro
yarn install
```

### Download latest release

Download and unzip the current **main** branch or one of the tags:

```sh
wget https://github.com/guilhermesantos001/lzo_api_pagseguro/archive/main.zip -O lzo_api_pagseguro.zip
unzip lzo_api_pagseguro.zip && rm lzo_api_pagseguro.zip
```

## Available Scripts

- `update` - updates the project dependencies
- `clean` - remove coverage data, Jest cache and transpiled files
- `prebuild` - lint source files and tests before building,
- `build` - transpile TypeScript to ES6
- `build:watch` - interactive watch mode to automatically transpile source files
- `type-check` - run tsc to check types
- `type-check:watch` - interactive watch mode to automatically check types
- `lint` - lint source files and tests
- `test` - run tests
- `test:watch` - interactive watch mode to automatically re-run tests

## Backers & Sponsors

Support this project by becoming a [sponsor][sponsor].

## License

Licensed under the APLv2. See the [LICENSE](https://github.com/guilhermesantos001/lzo_api_pagseguro/blob/main/LICENSE) file for details.

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen]: http://commitizen.github.io/cz-cli/
[ts-badge]: https://img.shields.io/badge/TypeScript-4.6-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2016.15-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v16.x/docs/api/
[gha-badge]: https://github.com/guilhermesantos001/lzo_api_pagseguro/actions/workflows/nodejs.yml/badge.svg
[gha-ci]: https://github.com/guilhermesantos001/lzo_api_pagseguro/actions/workflows/nodejs.yml
[typescript-4-6]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-6/
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/guilhermesantos001/lzo_api_pagseguro/blob/main/LICENSE
[sponsor-badge]: https://img.shields.io/badge/♥-Sponsor-fc0fb5.svg
[sponsor]: https://github.com/sponsors/guilhermesantos001
[wiki]: https://github.com/guilhermesantos001/lzo_api_pagseguro/wiki
