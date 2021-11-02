namespace Slide03 {
  interface User {
    id: number
    firstName: string
    lastName: string
  }

  class Customer implements User {
    id: number
    firstName: string
    lastName: string
  }
}