
export function getStack ( head:number=0 ) {
  let e = Error()
  let rows:string[]
  try {
    rows = e.stack.split('\n')
    rows = [ rows[0], ...rows.slice(2+head) ]
  } catch ( err ) {
    console.log('Failed to get stack.', err )
    rows = []
  }
  return rows
}