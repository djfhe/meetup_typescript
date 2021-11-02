namespace ConditionalTypes {
  
  type FooOrBar = 'foo' | 'bar'
  
  type ConditionalType<T extends FooOrBar> = T extends 'foo' ? string : number

  function getSmth<T extends FooOrBar>(param0: T, param1: ConditionalType<T>) {
    //
  }
}