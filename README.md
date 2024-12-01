# Pluralizer

[![Run tests](https://github.com/czernika/pluralizer/actions/workflows/tests.yml/badge.svg)](https://github.com/czernika/pluralizer/actions/workflows/tests.yml)

Yet another pluralization library but this time primarly in Russian 🇷🇺

> PRs are welcome to add another languages

## Installation

```sh
npm install pluralizer-ru
```

## Examples

Import language-based function from module as

```js
import { pluralizeRu } from 'pluralizer-ru'
```

### Basic usage

Pass amount of items and pluralization options as a second argument

```js
pluralizeRu(items.length, {
    single: 'результат',
    some: 'результата',
    many: 'результатов',
})
```

Second argument is pluralization object which accepts 3-4 keys for:

`single` - `val % 10 === 1 && val % 100 !== 11`
`some` - `val % 10 >= 2 && val % 10 <= 4 && (val % 100 < 10 || val % 100 >= 20)`
`many` - other cases but 0
`none` - (optional) - `n === 0`. If was not passed 0 value will be pluralized as `many`

```js
pluralizeRu(0, {
    single: 'результат',
    some: 'результата',
    many: 'результатов',
}) // 0 результатов

pluralizeRu(0, {
    single: 'результат',
    some: 'результата',
    many: 'результатов',
    none: '(ничего)',
}) // 0 (ничего)
```

### Show other placeholder than 0

Sometimes you need to show something but 0 for no results, e.g. "No results". Pass its value as 3rd argument

```js
pluralizeRu(0, {
    single: 'результат',
    some: 'результата',
    many: 'результатов',
    none: 'ничего',
}, 'Нет') // Нет ничего
```

### Do not show values

If your design requires to put value and title on different sites, e.g statistics cards, set `false` as 4th argument

```js
pluralizeRu(0, {
    single: 'результат',
    some: 'результата',
    many: 'результатов',
    none: 'ничего',
}, 0, false) // ничего
```

## License

Open-source under [MIT license](LICENSE)

## Testing

We are using [Bun](https://bun.sh/)

```sh
bun test
```
