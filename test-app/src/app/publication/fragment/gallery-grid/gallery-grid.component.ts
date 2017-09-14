import { Component, OnInit, ViewChildren, ViewChild} from '@angular/core';
import { RoutableComponent, FragmentDataComponent } from '../../../component-routing/module'
import { Criteria } from './gallery-grid.component.criteria'

import { KioContentModel, KioFragmentModel } from 'kio-ng2-data'

@RoutableComponent({
  queryable: Criteria,
  selector: 'kio-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.scss']
})
export class GalleryGridComponent extends FragmentDataComponent implements OnInit {

  calcedHeight:number
  itemNodes:KioFragmentModel[]=[]

  swiperConfig: Object = {}
  swiperIsBeginning:boolean = true
  swiperIsEnd:boolean = false


  @ViewChildren('galleryItem') galleryItems;


  onNodeUpdate() {
    super.onNodeUpdate()

    if (this.node) {
      this.setupChildren()
    }
  }

  ngOnInit() {

    // for mobile
    this.initSliderConfig()

    // for desktop
    this.calcFirstHeight()
  }


  setupChildren() {

    this.itemNodes = <KioFragmentModel[]>this.node.children
  }


   @ViewChild('usefulSwiper') usefulSwiper


  initSliderConfig() {

    let config = {
      centeredSlides: true,
      initialSlide : 0,
      loop : false,
      slidesPerView : 'auto',
      spaceBetween : 0,
      effect : 'slide',
      paginationClickable : true,
      pagination: '.swiper-pagination',
      // onReachBeginning : () => {
      //
      //   // this fires to early, throttle it
      //   process.nextTick( () => {
      //     this.swiperIsBeginning = true
      //   })
      // },
      // onReachEnd : () => {
      //
      //   process.nextTick( () => {
      //     this.swiperIsEnd = true
      //   })
      // },
      onSlideChangeStart : (swiper) => {
        this.swiperIsBeginning = swiper.isBeginning
        this.swiperIsEnd = swiper.isEnd
      }
    }

    this.swiperConfig = config
  }


  prev() {
    this.usefulSwiper.Swiper.slidePrev()
  }


  next() {
    this.usefulSwiper.Swiper.slideNext()
  }



  onItemLoaded(index) {

    if (this.itemNodes.length == index + 1) {

      // all items loaded, robin – to the amazing calculationmobile!
      this.calcFinalHeight()
    }
  }

  calcFirstHeight() {

    // assuming all items are 300px high
    this.calcedHeight = this.itemNodes.length / 3 * 300;
  }


  calcFinalHeight() {

    let items = this.galleryItems.toArray();
    let buffer:number = 50
    let itemsPerCol = Math.ceil(items.length / 3)
    let finalHeight:number = 0
    let tempHeight:number = 0


    for (let i in items) {

      tempHeight += items[i].nativeElement.offsetHeight

      if (parseInt(i) % itemsPerCol === 0) {

        if(tempHeight > finalHeight) {

          finalHeight = tempHeight
          tempHeight = 0
        }
      }
    }

    this.calcedHeight = finalHeight + buffer
  }

}
