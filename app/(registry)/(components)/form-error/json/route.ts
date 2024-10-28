export const GET = () =>
	Response.json({
		name: 'form-error',
		type: 'registry:block',
		dependencies: ['react-hot-toast'],
		devDependencies: [],
		registryDependencies: [],
		files: [
			{
				path: './components/form-error.tsx',
				content:
					"'use client'\n\nimport { useEffect } from 'react'\nimport toast from 'react-hot-toast'\n\nexport function FormError({ hidden = false, value }: { hidden?: boolean; value: string[] | undefined }) {\n\tuseEffect(() => {\n\t\tif (!hidden) return\n\t\tif (value?.length && value.length > 0) toast.error(`FATAL: ${value[0]}`)\n\t}, [hidden, value])\n\n\tif (hidden || !value || !value.length) return null\n\treturn <div className='text-sm text-destructive'>{value[0]}</div>\n}\n",
				type: 'registry:block',
			},
		],
		tailwind: {},
		cssVars: {},
		meta: {},
	})
