import { defineWindiSetup } from '@slidev/types'

// Erweiterung der eingebauten Windicss-Konfigurationen
export default defineWindiSetup(() => ({
  theme: {
    extend: {
      fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        mono: '"Fira Code", monospace',
      },
    },
  },
}))