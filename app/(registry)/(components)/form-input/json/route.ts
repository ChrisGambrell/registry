export const GET = () =>
	Response.json({
		name: 'form-input',
		type: 'registry:block',
		dependencies: ['@radix-ui/react-label', 'react-hot-toast'],
		devDependencies: [],
		registryDependencies: ['input', 'label'],
		files: [
			{
				path: './components/form-error.tsx',
				content:
					"'use client'\n\nimport { useEffect } from 'react'\nimport toast from 'react-hot-toast'\n\nexport function FormError({ hidden = false, value }: { hidden?: boolean; value: string[] | undefined }) {\n\tuseEffect(() => {\n\t\tif (!hidden) return\n\t\tif (value?.length && value.length > 0) toast.error(`FATAL: ${value[0]}`)\n\t}, [hidden, value])\n\n\tif (hidden || !value || !value.length) return null\n\treturn <div className='text-sm text-destructive'>{value[0]}</div>\n}\n",
				type: 'registry:block',
			},
			{
				path: './components/form-input.tsx',
				content:
					"import { cn } from '@/lib/utils'\nimport { FormError } from './form-error'\nimport { Input, InputProps } from './ui/input'\nimport { Label } from './ui/label'\n\ntype FormInputProps = InputProps & { error?: string[]; label?: string }\n\nexport function FormInput({ className, error, id, label, name, ...props }: FormInputProps) {\n\treturn (\n\t\t<div className={cn('grid gap-2 h-fit', className)}>\n\t\t\t{label && <Label htmlFor={id ?? name}>{label}</Label>}\n\t\t\t<Input id={id ?? name} name={name ?? id} {...props} />\n\t\t\t<FormError value={error} />\n\t\t</div>\n\t)\n}\n",
				type: 'registry:block',
			},
		],
		tailwind: {},
		cssVars: {},
		meta: {},
	})
