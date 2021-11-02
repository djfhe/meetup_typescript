namespace MappedTypes {
  
  type User = {
    id: number
    name: string
    role: string
  }

  type NullableUser = {
    [k in keyof User]: User[k] | null
  }

  type OptionalUser = {
    [k in keyof User]+?: User[k]
  }

  type RequeiredUser = {
    [k in keyof User]-?: User[k]
  }


  // Mapped Types with union
  type Union = number | 'foo' | 'bar'

  type NoStringMapped = {
    [k in Union]: k extends string ? never : k
  }[Union]

  
  type NoStringDistributed<T> = T extends string ? never : T


  type Exclude<T, U> = T extends U ? never : T;
  type RemoveNull<T> = {
    [k in keyof T]: Exclude<T[k], null> extends object
      ? RemoveNull<T[k]>
      : Exclude<T[k], null>
  }

}