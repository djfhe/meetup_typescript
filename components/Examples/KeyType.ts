namespace KeyType {
  const foo = {
    a: 5,
    b: 'foo',
    c: false
  }

  //const foo2: typeof foo = {}


  type Foo = {
    a: number
    b: string
    c: boolean
  }

  //const keyOfFoo: keyof Foo

  function getProp<T, V extends keyof T>(key: V, container: T): T[V] {
    return container[key]
  } 
}