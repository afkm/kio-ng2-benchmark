export interface MenuItem {
  title?: string
  cuid: string
  locale: string
}

export interface Menu {
  items: MenuItem[]
}