import { Component, OnInit, OnDestroy, OnChanges, AfterViewInit, AfterContentInit } from '@angular/core'
import { QueryableAnnotation } from 'kio-ng2-component-routing'
import { KioContentModel, KioContentState } from 'kio-ng2-data'
import { BackendService } from '../../../ctn/module'
import { ContentDataComponent } from './content-data.component'

export class TextDataComponent extends ContentDataComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterContentInit {

  text:string

  data:{
    text:string
  }

  protected onUpdate(){
    this.text = this.data.text
    super.onUpdate()
  }

}