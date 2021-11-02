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
  <b>Typescript</b>
</Fact>

---

<div class="text-blue-400 text-center">
  https://www.typescriptlang.org/
</div>

---

<div class="self-center">
  <h1 class="mb-4 text-3xl font-bold">Wer bin ich?</h1>
  <ul class="space-y-4 text-2xl">
    <li v-click="1">Daniel Thoma</li>
    <li v-click="2">Bachelor Student der TU Darmstadt</li>
    <li v-click="3">Seit 01.06.2021 Werkstudent bei clickbar. GmbH</li>
    <li v-click="4">Seit 2 Jahren in der Webentwicklung tätig</li>
  </ul>
</div>

---

<Fact>
  Warum <b> Typescript?</b>
</Fact>

<!--
Die Webentwicklung hat sich im laufe der Zeit sehr stark verändert. Währen der Fokus ursprünglich auf einfache Blogs bzw. Artikeln lag, so entstehen inzwischen jedoch immer größere und komplexere Projekte.
-->

---

<div class="self-center">

  <h1>Javascript Bytes</h1>

  <img class="object-fit w-160" src="/javascript_bytes.png"/>
</div>

---

<Fact>
  <b>Was ist Typescript?</b>
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

const everything: any = 'hello'

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
  TypeScript ist ein <br> <b>Superset von Javascript.</b>
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
  TypeScript existiert <br> <b> nicht zur Laufzeit.</b>
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
  TypeScript nutzt <br> <b> Structural Typing.</b>
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

<Fact>
  Wie hilft <b> Typescript?</b>
</Fact>
<button
  @click="$slidev.nav.openInEditor('./components/Examples/Advantages.ts')"
  title="Open in Editor"
  class="text-xl icon-btn opacity-50 !border-none !hover:text-white ml-auto">
  <carbon:edit />
</button>
