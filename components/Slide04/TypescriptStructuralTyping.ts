namespace Slide04 {
  class User {
    firstName: string
    lastName: string
  }

  class Customer {
    id: number
    firstName: string
    lastName: string
    role: string
  }

  class Extern {
    id: number
    role: string
  }

  getFullName(new Customer())

  // getFullName(new Extern()) // Error

  function getFullName(user: User): string {
    return user.firstName + user.lastName
  }
}