import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  safelist: ['after:absolute', 'after:content-[...]', 'after:bottom-0', 'after:right-0'],
  presets: [presetUno()]
});
