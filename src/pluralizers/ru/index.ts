import type { PluralizeOptions, PluralizeOptionsWithoutNoneKey } from '@/types/options'

const resolveKey = (val: number): keyof PluralizeOptionsWithoutNoneKey => {
    if (val % 10 === 1 && val % 100 !== 11) {
        return 'single'
    }

    if (val % 10 >= 2 && val % 10 <= 4 && (val % 100 < 10 || val % 100 >= 20)) {
        return 'some'
    }

    return 'many'
}

export const pluralize = (
    amount: number,
    options: PluralizeOptions,
    emptyPlaceholder: string | number = 0,
    showAmount = true,
): string => {
    const amountDisplayValue = amount === 0 ? emptyPlaceholder : amount

    const key = resolveKey(amount)
    if ('none' in options) {
        const noneKey = amount === 0 ? 'none' : key
        const pluralized = options[noneKey]
        return showAmount ? `${amountDisplayValue} ${pluralized}` : pluralized
    }

    const pluralized = options[key]
    return showAmount ? `${amountDisplayValue} ${pluralized}` : pluralized
}
