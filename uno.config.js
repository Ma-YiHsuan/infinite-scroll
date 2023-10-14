import { defineConfig, presetAttributify, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: [
        {
          name: 'Roboto',
          weights: [100, 300, 400, 500, 700, 900],
        },
        {
          name: 'Noto Sans TC',
          weights: [100, 200, 300, 400, 500, 600, 700, 800],
        },
      ],
    }),
  ],
  rules: [
    [/^lineHt-(\d+)$/, match => ({ 'line-height': `${match[1]}px` })],
  ],
  shortcuts: {
    btn: 'border-brand-gn border border-solid bg-brand-gnLight text-black text-18px lineHt-20 py-6px px-12px' 
  },  
  theme: {
    colors: {
      brand: {
        pk: '#fec5bb',
        pkLight: '#fcd5ce',
        pkExlight: '#fae1dd',
        gn: '#6b9080',
        gnLight: '#e8e8e4',
        cream: '#f8edeb',
      },
      black: '#343a40',
      gray: '#ced4da'
    },
  },
})
