export interface PluralizeOptionsWithoutNoneKey {
    single: string
    some: string
    many: string
}

export interface PluralizeOptionsWithNoneKey extends PluralizeOptionsWithoutNoneKey {
    none: string
}

export type PluralizeOptions = PluralizeOptionsWithoutNoneKey | PluralizeOptionsWithNoneKey
