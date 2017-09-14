
export interface FootnoteAnchor  {
  element:HTMLElement
  anchor?:HTMLAnchorElement
}

export interface InlineFootnoteElements {
  head?:FootnoteAnchor
  foot?:FootnoteAnchor
}

export interface InlineFootnote extends InlineFootnoteElements {
  name:string
}