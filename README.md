# Pluralizer

[![Run tests](https://github.com/czernika/pluralizer/actions/workflows/tests.yml/badge.svg)](https://github.com/czernika/pluralizer/actions/workflows/tests.yml)

Yet another pluralization library but this time primarly in Russian 🇷🇺

> PRs are welcome to add another languages

## Installation

```sh
npm install pluralizer-ru
```

## Examples

```js
import { pluralizeRu } from 'pluralizer-ru'

// No key for 0 items (by default it will take the key value for many)
const options = {
    single: 'яблоко',
    some: 'яблока',
    many: 'яблок',
}
pluralizeRu(0, options) // '0 яблок'
pluralizeRu(1, options) // '1 яблоко'
pluralizeRu(2, options) // '2 яблока'
pluralizeRu(11, options) // '11 яблок'
pluralizeRu(33, options) // '11 яблока'
pluralizeRu(50, options) // '50 яблок'
pluralizeRu(51, options) // '51 яблоко'
pluralizeRu(1022, options) // '1022 яблока'

// With "0" key
const options = {
    single: 'яблоко',
    some: 'яблока',
    many: 'яблок',
    none: 'яблочищ', // zero items
}

pluralizeRu(0, options) // '0 яблочищ'

// Custom 0 value
const options = {
    single: 'яблоко',
    some: 'яблока',
    many: 'яблок',
    none: 'яблок',
}

pluralizeRu(0, options, 'Нет') // 'Нет яблок'

// Do not output value
const options = {
    single: 'яблоко',
    some: 'яблока',
    many: 'яблок',
    none: 'яблок',
}

pluralizeRu(0, options, 0, false) // 'яблок' // do not show amount of items
```

## License

Open-source under [MIT license](LICENSE)

## Testing

We are using [Bun](https://bun.sh/)

```sh
bun test
```
