import { Formatted, Simple } from './interfaces'

export class LoggerStore <T> {

  constructor(
      data?:T[]
    ) {

  }

  protected data:[Date,T,string[]][]=[]

  public add ( item:T, stack:string[], timestamp:Date=new Date() ) {
    this.data.push([timestamp,item,stack])
  }

  public find ( callback:{(entry:T,timestamp:Date,idx?:number):boolean} ) {
    return this.data.find ( (row,idx) => callback ( row[1], row[0], idx ) )
  }

  public map <R> ( callback:{(entry:T,timestamp:Date,idx?:number):R} ) {
    return this.data.map ( (row,idx) => callback ( row[1], row[0], idx ) )
  }

  public getAt ( idx:number ) {
    return this.data [idx]
  }



}
