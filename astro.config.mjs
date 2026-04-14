// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config

// Astroの設定ファイル(現状はTailwind CSSをViteに統合するための設定のみ)
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
	},

  integrations: [mdx()],
});