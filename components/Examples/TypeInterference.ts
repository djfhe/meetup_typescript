namespace TypeInterference {
  
  type ContainerToTuple<T extends Container<any, any, any>> = T extends Container<infer T1, infer T2, infer T3> ? [T1, T2, T3] : undefined
  
  interface Container<T, T1, T2> {
    a: T,
    b: T1,
    c: T2
  }

  function containerToTuple<T extends Container<any, any, any>>(container: T): ContainerToTuple<T> {
    return [container.a, container.b, container.c] as ContainerToTuple<T>
  }

  const tuple = containerToTuple({ a: 'hello', b: 5, c: null })
}