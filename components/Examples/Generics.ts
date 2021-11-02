namespace Generics {
  class Container<T>{
    protected value?: T
  
    constructor (value?: T) {
      this.value = value
    }
  
    set (value: T): void {
      this.value = value
    }
  
    get (defaultValue?: T): T | undefined {
      return this.value ?? defaultValue
    }
  }
  
  const container = new Container()
}