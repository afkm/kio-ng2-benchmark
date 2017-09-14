import { SharingConfig } from './interfaces'

export let Sharings:SharingConfig[] = [
  {
    url : "https://www.facebook.com/sharer/sharer.php?u={{url}}",
    textKey : "",
    subjectKey : "",
    icon : 'facebook',
    class : '',
    composedUrl : ''
  },
  {
    url : "whatsapp://send?text={{text}}",
    textKey : "sharing_text_whatsapp",
    subjectKey : "",
    icon : 'whatsapp',
    class : 'hide-medium-up',
    composedUrl : ''
  },
  {
    url : "mailto:?subject={{subject}}&body={{text}}",
    textKey : "sharing_text_email",
    subjectKey : "sharing_subject_email",
    icon : 'mail',
    class : '',
    composedUrl : ''
  },
  {
    url : "https://twitter.com/intent/tweet?text={{text}}",
    textKey : "sharing_text_twitter",
    subjectKey : "",
    icon : 'twitter',
    class : '',
    composedUrl : ''
  },

  {
    url : "https://pinterest.com/pin/create/link/?url={{url}}&description={{text}}&media={{image}}",
    textKey : "sharing_text_pinterst",
    subjectKey : "",
    icon : 'pinterest',
    class : '',
    composedUrl : ''
  }
]
