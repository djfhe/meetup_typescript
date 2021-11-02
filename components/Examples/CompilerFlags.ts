// @ts-nocheck
namespace TemplateLiterals {

  const x: string = 10

  // @ts-ignore
  const a: string = 5

  // @ts-expect-error
  const b: string = 5
}