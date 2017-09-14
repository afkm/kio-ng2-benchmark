export interface AFKMFlags {
  read():string[]
  write(flags:string[]):void
  add(flag:string):void
  has(flag:string):boolean
  remove(flag:string):void
}