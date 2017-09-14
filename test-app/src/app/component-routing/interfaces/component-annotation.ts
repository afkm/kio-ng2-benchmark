import { ComponentDecorator, ComponentRef } from '@angular/core'
import { QueryableAnnotation, QueryableFragmentAnnotation } from 'kio-ng2-component-routing'
import { ContentType, Annotation } from './annotation'


export interface ComponentAnnotation <T extends ContentType> {
  [key:string]: any
  queryable: Annotation<T>
}