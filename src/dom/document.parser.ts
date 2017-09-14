import { KioDOMNode } from './interfaces'

const RE_COMPONENT_NAME = /^(kio|publication)\-\w+/

export function isKioComponentElement(element:HTMLElement) {
  return element && element.tagName && RE_COMPONENT_NAME.test(element.tagName.toLowerCase())
}

export function getKioComponentElement ( element:HTMLElement ):HTMLElement {
  if ( !element || !element.tagName || /^(body|html)/i.test(element.tagName) ) {
    console.warn('element is invalid', element)
    return undefined
  }
  if ( !isKioComponentElement(element) ) {
    console.log('element is no component element. Trying parent', element, element.parentElement)
    return getKioComponentElement(element.parentElement)
  } else {
    return element
  }
}

export function createNodeFromElement ( element:HTMLElement ):KioDOMNode {
  const kioComponentElement = getKioComponentElement (element)
  if ( !kioComponentElement ) {
    return undefined
  }

  return createNode ( element.dataset.cuid, element, kioComponentElement.tagName.toLowerCase(), kioComponentElement )
}

export function createNode ( cuid:string, element:HTMLElement, componentName:string, componentElement:HTMLElement ):KioDOMNode {
  return {
    element,
    componentElement,
    cuid,
    componentName
  }
}

export function findInDocument ( doc:Document ):KioDOMNode[] {
  const elements = doc.querySelectorAll('[data-cuid]')
  return Array.prototype.map.call(elements,(el:HTMLElement,idx:number)=>{
    return createNodeFromElement(el)
  })

}