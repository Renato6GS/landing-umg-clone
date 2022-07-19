import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';

// https://astro.build/config
export default {
  integrations: [astroImageTools],
  experimental: { integrations: true },
};
