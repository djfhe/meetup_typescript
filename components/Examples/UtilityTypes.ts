namespace TypeInterference {
  
  type User = {
    id: number
    name: string
    role?: string
  }

  type PartialUser = Partial<User>
  type RequiredUser = Required<User>
  type UserWithoutId = Omit<User, 'id'>
  type ExcludeNumbers = Exclude<'test' | 'foo' | number | 5, number>
}