import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

  transform(value: any, delimiter?: string): string {

    if(value < 0 || value === 'undefined' || typeof value === 'undefined') {

      return value
    }

    let dl = ':'


    if(delimiter) {
      dl = delimiter
    }


    let hours:number = 0
    let minutes:number = 0
    let seconds:number = 0


    if (value >= 3600) {

      hours = Math.floor(value / 3600);
    }

    minutes = Math.floor((value - (hours * 3600)) / 60);
    seconds = Math.floor((value - (minutes * 60) - (hours * 3600)));



    // string formatting

    let hoursString:string = ""
    let minutesString:string = ""
    let secondsString:string = ""


    if(hours > 0) {
      hoursString = String(hours) + dl
    }


    minutesString = String(minutes)
    if(minutes < 10) { // leading zero
      minutesString = '0' + String(minutes)
    }


    secondsString = String(seconds)
    if(seconds < 10) { // leading zero
      secondsString = '0' + String(seconds)
    }




    return hoursString + minutesString + dl + secondsString;

  }

}
