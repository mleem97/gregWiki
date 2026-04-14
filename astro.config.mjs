import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://wiki.gregframework.eu',
	integrations: [
		starlight({
			title: 'gregWiki',
            description: 'The authoritative documentation for gregFramework and Data Center modding.',
			social: {
				github: 'https://github.com/mleem97/gregCore',
			},
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: '01_getting-started' },
				},
				{
					label: 'Development',
					autogenerate: { directory: '02_development' },
				},
                {
					label: 'Design System',
					autogenerate: { directory: '03_design-system' },
				},
                {
					label: 'Community',
					autogenerate: { directory: '04_community' },
				},
                {
					label: 'Legal',
					autogenerate: { directory: '05_legal' },
				},
                {
					label: 'Tools',
					autogenerate: { directory: '06_tools' },
				},
			],
            customCss: [
                './src/styles/custom.css',
                './src/styles/global.css',
            ],
		}),
        react(),
	],
    vite: {
        plugins: [tailwindcss()],
    },
});
