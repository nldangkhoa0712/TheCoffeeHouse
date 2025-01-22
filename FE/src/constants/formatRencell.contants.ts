
type TypeOfConst<T> = T[keyof T];

export const FormatColumns = {
    String: 'String',
    Interger: "Interger",
    Demical: "Demical",
    Date: "Date",
    DateTime: 'DateTime',
    Number: "Number",
    Boolean: 'Boolean',
    Combobox: 'Combobox'
} as const

export type FormatColumnsType = TypeOfConst<typeof FormatColumns>