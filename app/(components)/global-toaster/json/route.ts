export const GET = () =>
	Response.json({
		name: 'global-toaster',
		type: 'registry:block',
		dependencies: ['react-hot-toast'],
		devDependencies: [],
		registryDependencies: [],
		files: [
			{
				path: './global-toaster.json',
				content: '',
				type: 'registry:example',
				target: '~/global-toaster.json',
			},
		],
		tailwind: {},
		cssVars: {},
		meta: {},
	})
