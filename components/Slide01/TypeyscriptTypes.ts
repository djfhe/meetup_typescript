namespace Slide01 {

  const isDone: boolean = false
  
  const decimal: number = 6
  const hex: number = 0xf00d
  const binary: number = 0b1010
  const octal: number = 0o744
  const big: bigint = 100n
  
  const fullName: string = 'Daniel Thoma'

  const version: '1.0' | '2.0' | '3.0' = '1.0'

  const list: number[] = [2, 1, 0]
  
  const tuple: [number, number, number] = [0, 1, 2]
  
  const tuble01: [number, string, boolean] = [0, 'Hello!', false]
  
  
  const notSure: unknown = 20
  
  const u: undefined = undefined
  
  const n: null = null
  
  function returnsVoid(): void {
    // Do stuff
  }
  
  function neverReturns(): never {
    throw new Error()
  }
}