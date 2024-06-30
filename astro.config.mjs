import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/static'

let siteUrl = null

if (process?.env?.SITE_URL) {
	siteUrl = process.env.SITE_URL
} else if (process?.env?.VERCEL_PROJECT_PRODUCTION_URL) {
	siteUrl = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
} else if (process?.env?.VERCEL_URL) {
	siteUrl = `https://${process.env.VERCEL_URL}`
}

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: siteUrl,
	adapter: vercel({
		imageService: true,
		devImageService: true,
	}),
})
