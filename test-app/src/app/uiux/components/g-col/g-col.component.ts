import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'g-col',
  templateUrl: './g-col.component.html',
  styleUrls: ['./g-col.component.scss']
})

export class GColComponent implements OnInit {


    private _cols : Array<any> = []
    private _offsets : Array<any> = []

    get cols():any[] {
        return this._cols.slice()
    }

    get offsets():any[] {
        return this._offsets.slice()
    }


    @Input() default: number = 12
    @Input() small: number
    @Input() medium: number = 4

    @Input() offset: number
    @Input() smallOffset: number
    @Input() mediumOffset: number



    ngOnInit() {

        this._cols = [
          'g-col-' + this.default,
          'g-col-m-' + this.medium
        ]


        if (this.small) {

            this._cols.push('g-col-s-' + this.small)
        }


        if (this.offset) {

            this._offsets.push('g-offset-' + this.offset)
        }

        if (this.smallOffset) {

            this._offsets.push('g-offset-s-' + this.smallOffset)
        }

        if (this.mediumOffset) {

            this._offsets.push('g-offset-m-' + this.mediumOffset)
        }
    }
}
