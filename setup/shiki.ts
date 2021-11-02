import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async (shiki) => {
  return {
    theme: await shiki.loadTheme('./../../themes/dark-plus-material.json'),
  }
})
