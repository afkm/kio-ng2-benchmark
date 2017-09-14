import { KioNodeType } from 'kio-ng2-data'
import { FragmentAnnotation } from '../../../component-routing/module'

export const Criteria : FragmentAnnotation = {
  type: 'fragment' ,
  modifiers: [
    "metabox"
  ] ,
  childTypes: {
    "contains": [
      "fragment",
      "fragment"
    ]
  }
}
