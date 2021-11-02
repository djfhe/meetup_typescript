---
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# persist drawings in exports and build
drawings:
  persist: false
layout: default
---

<Fact>
  <b>What is Typescript ?</b>
</Fact>

---

<Fact>
  TypeScript is <b>Javascript <br> with syntax for types.</b>
</Fact>

---

<div class="self-center mx-auto flex flex-col">

```ts {all|1|3-7|9-11|13-17|all}
const isDone: boolean = false

const decimal: number = 6
const hex: number = 0xf00d
const binary: number = 0b1010
const octal: number = 0o744
const big: bigint = 100n

const fullName: string = 'Daniel Thoma'

const version: '1.0' | '2.0' | '3.0' = '1.0'

const list: number[] = [2, 1, 0]

const tuple: [number, number, number] = [0, 1, 2]

const tuble01: [number, string, boolean] = [0, 'Hello!', false]
```
<button
  @click="$slidev.nav.openInEditor('./components/Slide01/TypescriptTypes.ts')"
  title="Open in Editor"
  class="text-xl icon-btn opacity-50 !border-none !hover:text-white ml-auto">
  <carbon:edit />
</button>
</div>
---

<div class="self-center mx-auto flex flex-col">

```ts {all|1|3-5|7-13|all}
const notSure: unknown = 20

const u: undefined = undefined

const n: null = null

function returnsVoid(): void {
  // Do stuff
}

function neverReturns(): never {
  throw new Error()
}
```
</div>
<button
  @click="$slidev.nav.openInEditor('./components/Slide01/TypescriptTypes.ts')"
  title="Open in Editor"
  class="text-xl icon-btn opacity-50 !border-none !hover:text-white ml-auto">
  <carbon:edit />
</button>

---

<Fact>
  TypeScript is a <br> <b>superset of Javascript.</b>
</Fact>

---

<div class="self-center mx-auto flex flex-col">

```ts {all|1-12|14-18}
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
```
<button
  @click="$slidev.nav.openInEditor('./components/Slide02/TypescriptSuperset.ts')"
  title="Open in Editor"
  class="text-xl icon-btn opacity-50 !border-none !hover:text-white ml-auto">
  <carbon:edit />
</button>
</div>

---

<Fact>
  TypeScript does <br> <b> not exist at Runtime.</b>
</Fact>

---

<div class="self-center mx-auto flex flex-col">

```ts {all}
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
```
<button
  @click="$slidev.nav.openInEditor('./components/Slide03/TypescriptRuntime.ts')"
  title="Open in Editor"
  class="text-xl icon-btn opacity-50 !border-none !hover:text-white ml-auto">
  <carbon:edit />
</button>
</div>

---

<Fact>
  TypeScript relies on <br> <b> structural typing.</b>
</Fact>

---

<div class="self-center mx-auto flex flex-col">

```ts {all}
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

getFullName(new Extern()) // Error

function getFullName(user: User): string {
  return user.firstName + user.lastName
}
```
<button
  @click="$slidev.nav.openInEditor('./components/Slide04/TypescriptStructuralTyping.ts')"
  title="Open in Editor"
  class="text-xl icon-btn opacity-50 !border-none !hover:text-white ml-auto">
  <carbon:edit />
</button>
</div>

---

Vorteile:
- Autocompletion
- Bugs vorbeugung
  - Error bei Änderungen
  - Typos
  - logik Fehler

Typemanipulation
- casting
- generics
- keyof | typeof
- conditional types
- mapped types
- template liters

- @ts-expect-error
- @ts-ignore

- Utility Types