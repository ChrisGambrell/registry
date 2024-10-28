export const GET = () =>
	Response.json({
		name: 'action-button',
		type: 'registry:block',
		dependencies: ['@radix-ui/react-slot'],
		devDependencies: [],
		registryDependencies: ['button'],
		files: [
			{
				path: './components/action-button.tsx',
				content:
					"'use client'\n\nimport { Loader2Icon } from 'lucide-react'\nimport { useFormStatus } from 'react-dom'\nimport { cn } from '../lib/utils'\nimport { Button, ButtonProps } from './ui/button'\n\nexport function ActionButton({ children, className, disabled, loading, ...props }: ButtonProps & { loading?: boolean }) {\n\tconst { pending } = useFormStatus()\n\n\treturn (\n\t\t<Button className={cn('relative', className)} disabled={disabled || loading || pending} type='submit' {...props}>\n\t\t\t<span className={cn('flex items-center', { invisible: loading || pending })}>{children}</span>\n\t\t\t{(loading || pending) && (\n\t\t\t\t<div className='absolute m-auto'>\n\t\t\t\t\t<Loader2Icon className='size-5 animate-spin' />\n\t\t\t\t</div>\n\t\t\t)}\n\t\t</Button>\n\t)\n}\n",
				type: 'registry:block',
			},
		],
		tailwind: {},
		cssVars: {},
		meta: {},
	})
