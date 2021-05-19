# logvar

[![TypeScript version][ts-badge]][typescript-4-2]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][license]
[![Node.js CI](https://github.com/nzambello/logvar/actions/workflows/nodejs.yml/badge.svg)](https://github.com/nzambello/logvar/actions/workflows/nodejs.yml)

Utility that prints variables in console log for debugging purpose.

```js
logvar({ life }); // logs `life: 42`
```

## The purpose

This is the same old story: a lazy developer automating a simple but repetitive task when it is not really needed.
Does the world need another utility for lazy devs? Maybe not, but I did this.

I found myself writing things like:

```js
console.log(`loremIpsum:`, loremIpsum);
```

like 500 times a day to debug stuff in js.

I was logging variables but having some of them, I needed a label with the name, so I logged a string with the name and then the value. 500 times a day.
This utility is a helper function doing this for you.

### The real purpose: life

Was I losing time on this `console.log` thingy? Maybe not, but don't we developers have more to focus on?
I think quality of life of a developer is compromised by a lot of stuff, debugging is tedious and this won't be annoying anymore!

So, this utility is meant to hug you during your debugging time saying: "Hey, you're great, you will find out what is going on. Here's some help".

## Usage

```ts
import logvar from 'logvar';

const life = 42;
const hello = 'world!';

// passing an object with the varibles to inspect like this
logvar({ life });
/* prints:
life: 42
*/

// passing multiple variables
logvar({ life, hello });
/* prints:
life:  42
hello: world!
*/

// passing a variable directly
logvar(life);
/* prints:
42
*/
```

## Installation

```sh
yarn add --dev logvar
# npm i --save-dev logvar
```

## License

Licensed under the APLv2. See the [LICENSE](https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-4.2-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2014.16-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v14.x/docs/api/
[travis-badge]: https://travis-ci.org/jsynowiec/node-typescript-boilerplate.svg?branch=main
[travis-ci]: https://travis-ci.org/jsynowiec/node-typescript-boilerplate
[gha-badge]: https://github.com/jsynowiec/node-typescript-boilerplate/actions/workflows/nodejs.yml/badge.svg
[gha-ci]: https://github.com/jsynowiec/node-typescript-boilerplate/actions/workflows/nodejs.yml
[typescript]: https://www.typescriptlang.org/
[typescript-4-2]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-2.html
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/jsynowiec/node-typescript-boilerplate/blob/main/LICENSE
[sponsor-badge]: https://img.shields.io/badge/♥-Sponsor-fc0fb5.svg
[sponsor]: https://github.com/sponsors/jsynowiec
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[wiki-js-tests]: https://github.com/jsynowiec/node-typescript-boilerplate/wiki/Unit-tests-in-plain-JavaScript
[prettier]: https://prettier.io
[volta]: https://volta.sh
[volta-getting-started]: https://docs.volta.sh/guide/getting-started
[volta-tomdale]: https://twitter.com/tomdale/status/1162017336699838467?s=20
[gh-actions]: https://github.com/features/actions
[travis]: https://travis-ci.org
[repo-template-action]: https://github.com/jsynowiec/node-typescript-boilerplate/generate
