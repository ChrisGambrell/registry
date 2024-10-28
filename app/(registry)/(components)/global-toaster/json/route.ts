export const GET = () =>
	Response.json({
		name: 'global-toaster',
		type: 'registry:block',
		dependencies: ['react-hot-toast'],
		devDependencies: [],
		registryDependencies: [],
		files: [
			{
				path: './components/global-toaster.tsx',
				content:
					"'use client'\n\nimport { usePathname, useRouter, useSearchParams } from 'next/navigation'\nimport { useEffect } from 'react'\nimport toast, { Toaster } from 'react-hot-toast'\n\nexport function GlobalToaster() {\n\tconst pathname = usePathname()\n\tconst router = useRouter()\n\tconst searchParams = useSearchParams()\n\n\tuseEffect(() => {\n\t\tconst message = searchParams.get('message')\n\t\tconst error = searchParams.get('error')\n\t\tconst success = searchParams.get('success')\n\n\t\tif (!message && !error && !success) return\n\t\tconst toastType = message ? toast : success ? toast.success : toast.error\n\t\ttoastType(message ? message : success ? success : error)\n\n\t\tconst newSearchParams = new URLSearchParams(searchParams.toString())\n\t\tconst paramsToRemove = ['message', 'error', 'success']\n\t\tparamsToRemove.forEach((param) => newSearchParams.delete(param))\n\t\tconst redirectPath = `${pathname}?${newSearchParams.toString()}`\n\t\trouter.replace(redirectPath, { scroll: false })\n\t}, [searchParams])\n\n\treturn <Toaster />\n}\n",
				type: 'registry:block',
			},
		],
		tailwind: {},
		cssVars: {},
		meta: {},
	})
