import { Component, ViewChild, OnInit, AfterContentInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { RoutableComponent, TextDataComponent } from '../../../component-routing/module'

import { KioContentModel, KioContentState } from 'kio-ng2-data'

//import { KioNg2MarkdownService } from 'kio-ng2-markdown'
import * as _ from 'lodash'

import { InlineFootnote, InlineFootnoteElements, FootnoteAnchor } from './footnotes/interfaces'
import * as footnotesApi from './footnotes/parse'

declare const require
const cuid = require('cuid')

export interface HTMLReplacementMap {
  [key:string]: string;
}

@RoutableComponent({
  selector: 'publication-formatted-text',
  templateUrl: './formatted-text.component.html',
  styleUrls: ['./formatted-text.component.scss'],
  encapsulation: ViewEncapsulation.None,
  queryable: {
    type: 'txt' ,
    modifiers: [ ]
  }
})
export class FormattedTextComponent extends TextDataComponent {


  stateChangeTimeout:number=2000

  protected markdownRendered:boolean=false

  get hasData() : boolean {
    return this.markdownRendered
  }

  onMarkdownRendered(event:{targetElement:ElementRef,source:string}){
    this.extendLinksInMarkdown(event.targetElement.nativeElement)
    this.markdownRendered = true
    this.updateContentState(KioContentState.loaded)
  }

  htmlReplacements:HTMLReplacementMap={}

  onNodeUpdate(){
    super.onNodeUpdate()

    this.setupMods()
  }

  onBeforeLoad() {
    super.onBeforeLoad()
    // this.formattedText = ''
    // this.htmlReplacements = {}
  }

  onUpdate(){
    super.onUpdate()
    // if ( this.text && !this.formattedText )
    // {
    //   this.updateFormattedText(this.text)
    // }
  }


  extendMarkdown ( element:HTMLElement ) {
    this.extendLinksInMarkdown(element)
  }

  handleFootnoteClick ( footnote:InlineFootnote, event:MouseEvent ) {
    event.preventDefault()
    event.stopPropagation()

    if ( footnotesApi.isFootnoteExpanded ( footnote ) )
    {
      footnotesApi.collapseFootnote(footnote)
    }
    else {
      footnotesApi.expandFootnote(footnote)
    }
  }

  extendLinksInMarkdown ( element:HTMLElement ) {

    const footnotes = footnotesApi.parseElement(element)
    for(let key in footnotes)
    {
      const footnote = footnotes[key]
      footnotesApi.traverseFootnote(footnote)
      footnote.head.anchor.addEventListener ( 'click', event => {
        this.handleFootnoteClick ( footnote, event )
      } )
      footnotesApi.collapseFootnote(footnote)
    }

    const links = element.querySelectorAll ( 'a' )
    Array.prototype.forEach.call ( links, ( link:HTMLAnchorElement ) => {
      if ( !link.target )
      {
        link.target = '_blank'
      }
    } )
  }

  ngOnInit(){
    super.ngOnInit()
  }


  appliedMods:string[]=[]

  setupMods() {

    const availableMods = ['initial', 'intro']
    this.appliedMods = []
    for (let mod of this.node.modifiers) {
      if (availableMods.indexOf(mod) > -1) {
        this.appliedMods.push(mod);
      }
    }
  }

}
