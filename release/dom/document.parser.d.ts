import { KioDOMNode } from './interfaces';
export declare function isKioComponentElement(element: HTMLElement): boolean;
export declare function getKioComponentElement(element: HTMLElement): HTMLElement;
export declare function createNodeFromElement(element: HTMLElement): KioDOMNode;
export declare function createNode(cuid: string, element: HTMLElement, componentName: string, componentElement: HTMLElement): KioDOMNode;
export declare function findInDocument(doc: Document): KioDOMNode[];
