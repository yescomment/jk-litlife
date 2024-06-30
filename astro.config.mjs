import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/static'

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: process?.env?.SITE_URL || process?.env?.VERCEL_PROJECT_PRODUCTION_URL || process?.env?.VERCEL_PROJECT_PRODUCTION_URL,
	adapter: vercel({
		imageService: true,
		devImageService: true,
	}),
})
