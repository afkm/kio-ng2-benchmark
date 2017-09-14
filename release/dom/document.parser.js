var RE_COMPONENT_NAME = /^(kio|publication)\-\w+/;
export function isKioComponentElement(element) {
    return element && element.tagName && RE_COMPONENT_NAME.test(element.tagName.toLowerCase());
}
export function getKioComponentElement(element) {
    if (!element || !element.tagName || /^(body|html)/i.test(element.tagName)) {
        console.warn('element is invalid', element);
        return undefined;
    }
    if (!isKioComponentElement(element)) {
        console.log('element is no component element. Trying parent', element, element.parentElement);
        return getKioComponentElement(element.parentElement);
    }
    else {
        return element;
    }
}
export function createNodeFromElement(element) {
    var kioComponentElement = getKioComponentElement(element);
    if (!kioComponentElement) {
        return undefined;
    }
    return createNode(element.dataset.cuid, element, kioComponentElement.tagName.toLowerCase(), kioComponentElement);
}
export function createNode(cuid, element, componentName, componentElement) {
    return {
        element: element,
        componentElement: componentElement,
        cuid: cuid,
        componentName: componentName
    };
}
export function findInDocument(doc) {
    var elements = doc.querySelectorAll('[data-cuid]');
    return Array.prototype.map.call(elements, function (el, idx) {
        return createNodeFromElement(el);
    });
}
//# sourceMappingURL=document.parser.js.map