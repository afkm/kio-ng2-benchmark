import { InlineFootnote, FootnoteAnchor, InlineFootnoteElements } from './interfaces'

export function findFootnoteHeads ( target:HTMLElement ) {
  return target.querySelectorAll('a[href*="#footnote"]')
}

export function parseElement ( target:HTMLElement ) {
  const footnotes:{[key:string]: InlineFootnote} = {}

  const footnoteAnchors = findFootnoteHeads(target)
  Array.prototype.forEach.call(footnoteAnchors,(anchor:HTMLAnchorElement) => {
    const footnoteName = anchor.href.replace(/.*\#footnote\-/,'')
    const footnoteSpan = <HTMLSpanElement>target.querySelector('span#footnote-'+footnoteName)
    footnotes[footnoteName] = {
      name: footnoteName,
      head: {
        element: anchor.parentElement,
        anchor: anchor
      },
      foot: {
        element: footnoteSpan,
        anchor: null
      }
    }
  })
  return footnotes
}

export function isWrappedAnchor ( anchor:HTMLAnchorElement ) {
  return anchor.parentElement.tagName.toLowerCase() === 'strong' || anchor.parentElement.tagName.toLowerCase() === 'small'
}

export function traverseFootnote ( footnote:InlineFootnote ) {

  const headElement = footnote.head

  if ( isWrappedAnchor(headElement.anchor) )
  {
    headElement.element = headElement.anchor.parentElement
    headElement.element.removeChild(headElement.anchor)
    headElement.anchor.innerHTML = headElement.element.outerHTML
    headElement.element.insertAdjacentElement('beforeBegin',headElement.anchor)
    headElement.element.remove()
    headElement.element = headElement.anchor
  }

  headElement.element.insertAdjacentElement('afterend',footnote.foot.element)

  if(footnote.foot.anchor)
  {
    footnote.foot.anchor.hidden = true
    const smallEl = footnote.foot.element.querySelector('small')
    smallEl.textContent = smallEl.textContent.replace(/^\[\S+]\:\ */,'')
  }
  //footnote.foot.element.parentElement.removeChild(footnote.foot.element)
}

export function collapseFootnote ( footnote:InlineFootnote ) {
  footnote.head.element.classList.add ( 'collapsed' );
  // footnote.foot.element.classList.add ( 'collapsed' )
}

export function expandFootnote ( footnote:InlineFootnote ) {
  footnote.head.element.classList.remove ( 'collapsed' );
  // footnote.foot.element.classList.remove ( 'collapsed' )
}

export function isFootnoteExpanded ( footnote:InlineFootnote ) {
  return !footnote.head.element.classList.contains('collapsed')
}
