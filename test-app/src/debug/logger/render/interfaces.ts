export interface Descriptor<T> {
  ( target:any, key:string, value:T, index?:number ):string
}

export interface FormatElement {
  value: any
  prefix?: string
}

export interface FormatPlaceholder <T> extends FormatElement {
  parameter: T
}
