import { describe, expect, it, test } from 'bun:test'
import { pluralizeRu } from '@/index'
import type { PluralizeOptionsWithNoneKey, PluralizeOptionsWithoutNoneKey } from '@/types/options'

const OPTIONS_WITH_NONE_KEY: PluralizeOptionsWithNoneKey = {
    none: 'нет яблок',
    single: 'яблоко',
    some: 'яблока',
    many: 'яблок',
}

const OPTIONS_WITHOUT_NONE_KEY: PluralizeOptionsWithoutNoneKey = {
    single: 'яблоко',
    some: 'яблока',
    many: 'яблок',
}

describe('Russian pluralization', () => {
    describe('options has `none` key', () => {
        test.each([
            { count: 0, options: OPTIONS_WITH_NONE_KEY, expected: 'нет яблок' },
            { count: 1, options: OPTIONS_WITH_NONE_KEY, expected: 'яблоко' },
            { count: 2, options: OPTIONS_WITH_NONE_KEY, expected: 'яблока' },
            { count: 3, options: OPTIONS_WITH_NONE_KEY, expected: 'яблока' },
            { count: 4, options: OPTIONS_WITH_NONE_KEY, expected: 'яблока' },
            { count: 5, options: OPTIONS_WITH_NONE_KEY, expected: 'яблок' },
            { count: 6, options: OPTIONS_WITH_NONE_KEY, expected: 'яблок' },
            { count: 7, options: OPTIONS_WITH_NONE_KEY, expected: 'яблок' },
            { count: 8, options: OPTIONS_WITH_NONE_KEY, expected: 'яблок' },
            { count: 9, options: OPTIONS_WITH_NONE_KEY, expected: 'яблок' },
            { count: 10, options: OPTIONS_WITH_NONE_KEY, expected: 'яблок' },
            { count: 11, options: OPTIONS_WITH_NONE_KEY, expected: 'яблок' },
            { count: 12, options: OPTIONS_WITH_NONE_KEY, expected: 'яблок' },
            { count: 13, options: OPTIONS_WITH_NONE_KEY, expected: 'яблок' },
            { count: 14, options: OPTIONS_WITH_NONE_KEY, expected: 'яблок' },
            { count: 15, options: OPTIONS_WITH_NONE_KEY, expected: 'яблок' },
            { count: 20, options: OPTIONS_WITH_NONE_KEY, expected: 'яблок' },
            { count: 21, options: OPTIONS_WITH_NONE_KEY, expected: 'яблоко' },
            { count: 22, options: OPTIONS_WITH_NONE_KEY, expected: 'яблока' },
            { count: 23, options: OPTIONS_WITH_NONE_KEY, expected: 'яблока' },
            { count: 24, options: OPTIONS_WITH_NONE_KEY, expected: 'яблока' },
            { count: 25, options: OPTIONS_WITH_NONE_KEY, expected: 'яблок' },
            { count: 69, options: OPTIONS_WITH_NONE_KEY, expected: 'яблок' }, // nice
            { count: 100, options: OPTIONS_WITH_NONE_KEY, expected: 'яблок' },
            { count: 101, options: OPTIONS_WITH_NONE_KEY, expected: 'яблоко' },
            { count: 111, options: OPTIONS_WITH_NONE_KEY, expected: 'яблок' },
            { count: 1001, options: OPTIONS_WITH_NONE_KEY, expected: 'яблоко' },
            { count: 1011, options: OPTIONS_WITH_NONE_KEY, expected: 'яблок' },
            { count: 1022, options: OPTIONS_WITH_NONE_KEY, expected: 'яблока' },
        ])('should return correct value', ({ count, options, expected }) => {
            expect(pluralizeRu(count, options, 0, false)).toBe(expected)
        })
    })

    describe('options has not `none` key', () => {
        test.each([
            { count: 0, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблок' },
            { count: 1, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблоко' },
            { count: 2, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблока' },
            { count: 3, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблока' },
            { count: 4, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблока' },
            { count: 5, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблок' },
            { count: 6, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблок' },
            { count: 7, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблок' },
            { count: 8, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблок' },
            { count: 9, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблок' },
            { count: 10, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблок' },
            { count: 11, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблок' },
            { count: 12, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблок' },
            { count: 13, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблок' },
            { count: 14, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблок' },
            { count: 15, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблок' },
            { count: 20, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблок' },
            { count: 21, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблоко' },
            { count: 22, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблока' },
            { count: 23, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблока' },
            { count: 24, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблока' },
            { count: 25, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблок' },
            { count: 100, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблок' },
            { count: 101, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблоко' },
            { count: 111, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблок' },
            { count: 1001, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблоко' },
            { count: 1011, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблок' },
            { count: 1022, options: OPTIONS_WITHOUT_NONE_KEY, expected: 'яблока' },
        ])('should return correct value', ({ count, options, expected }) => {
            expect(pluralizeRu(count, options, 0, false)).toBe(expected)
        })
    })

    it('should show value', () => {
        expect(pluralizeRu(10, OPTIONS_WITH_NONE_KEY)).toBe('10 яблок')
    })

    it('should show placeholder', () => {
        expect(pluralizeRu(0, OPTIONS_WITH_NONE_KEY, 'Совсем')).toBe('Совсем нет яблок')
    })
})
