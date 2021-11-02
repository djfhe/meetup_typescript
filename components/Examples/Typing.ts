namespace Typing {
  type UserType = {
    id: number
    name: string
  }
  
  type AorB = 'a' | 'b'
  
  // Union | Intersection

  type Foo = {
    prop1: string
    prop2: number
  }
  
  type OptionalFoo = {
    prop1?: string
    prop2?: number
  }

  type Bar = {
    prop1: number
    prop2: string
  }

  //const union: Foo | Bar

  //const intersection: Foo & OptionalFoo
}

namespace TypeVsInterface {
  type UserType = {
    id: number
    name: string
  }

  interface UserInterface {
    id: number
    name: string
  }

  // Typemanipulation

  // Class implementing
}


// Casting
namespace Casting {
  type Stats = {
    id: number
    total: number
    subTotal: number
  }

  type PartialStats = {
    id: number | null
    total: number | null
    subTotal: number | null
  }

  function sanitizeStats(partial: PartialStats): Stats {
    return Object.fromEntries(Object.entries(partial).map(([k, v]) => {
      return [k, v ?? 0]
    })) as Stats
  }
}

// Better than casting
namespace UserDefineGuards {
  type Stats = {
    id: number
    total: number
    subTotal: number
  }
  
  function isStats(val: unknown): val is Stats {
    const potentialStats = val as Stats
    return typeof potentialStats.id === 'number'
        && typeof potentialStats.total === 'number'
        && typeof potentialStats.subTotal === 'number'
  }
}
