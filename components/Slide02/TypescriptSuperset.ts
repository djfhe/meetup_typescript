namespace Slide02 {
  interface User {
    id: number
    firstName: string
    lastName: string
    role: string
  }

  function updateUserInTypescript(id: number, update: User): void {
    const user: User = getUser(id)
    const newUser: User = { ...user, ...update }  
    saveUser(id, newUser)
  }

  function updateUserInJavascript(id, update) {
    const user = getUser(id)
    const newUser = { ...user, ...update }
    saveUser(id, newUser)
  }

  function getUser(id: number) {
    return {
      id: id,
      firstName: 'Daniel',
      lastName: 'Thoma',
      role: 'Presentator',
    }
  }

  function saveUser(id: number, newUser: User) {
    // saving user....
  }
}