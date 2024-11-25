# Pluralizer

TODO

## Examples

```js
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

const options = {
    single: 'яблоко',
    some: 'яблока',
    many: 'яблок',
    none: 'яблочищ', // zero items
}

pluralizeRu(0, options) // '0 яблочищ'

const options = {
    single: 'яблоко',
    some: 'яблока',
    many: 'яблок',
    none: 'яблок',
}

pluralizeRu(0, options, 'Нет') // 'Нет яблок'

const options = {
    single: 'яблоко',
    some: 'яблока',
    many: 'яблок',
    none: 'яблок',
}

pluralizeRu(0, options, 0, false) // 'яблок' // do not show amount of items
```
