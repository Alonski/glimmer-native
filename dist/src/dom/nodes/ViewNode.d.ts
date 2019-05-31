import { EventData } from 'tns-core-modules/ui/page/page';
export default class ViewNode {
    nodeValue: any;
    namespaceURI: any;
    attributes: any;
    insertAdjacentHTML: any;
    getAttributeNS: any;
    removeAttributeNS: any;
    setAttributeNS: any;
    nodeName: any;
    previousSibling: any;
    cloneNode: any;
    args: any;
    template: any;
    nodeType: any;
    _tagName: any;
    parentNode: any;
    childNodes: any;
    prevSibling: any;
    nextSibling: any;
    _ownerDocument: any;
    _nativeView: any;
    _meta: any;
    constructor();
    hasAttribute(): boolean;
    removeAttribute(): boolean;
    toString(): string;
    tagName: any;
    readonly firstChild: any;
    readonly lastChild: any;
    nativeView: any;
    readonly meta: any;
    readonly ownerDocument: any;
    getAttribute(key: any): any;
    setAttribute(key: any, value: any): void;
    setStyle(property: any, value: any): void;
    setText(text: any): void;
    addEventListener(event: any, handler: any): void;
    removeEventListener(event: any, handler: any): void;
    dispatchEvent(event: EventData): void;
    insertBefore(childNode: any, referenceNode: any): void;
    appendChild(childNode: any): void;
    removeChild(childNode: any): void;
    firstElement(): any;
}
