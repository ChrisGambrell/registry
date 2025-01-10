export const GET = () =>
	Response.json({
	"name": "form",
	"type": "registry:block",
	"dependencies": [
		"@cgambrell/utils",
		"@radix-ui/react-checkbox",
		"@radix-ui/react-dialog",
		"@radix-ui/react-label",
		"@radix-ui/react-popover",
		"@radix-ui/react-radio-group",
		"@radix-ui/react-select",
		"@radix-ui/react-slot",
		"@radix-ui/react-switch",
		"cmdk",
		"react-hot-toast",
		"zod"
	],
	"devDependencies": [],
	"registryDependencies": [
		"button",
		"card",
		"checkbox",
		"command",
		"dialog",
		"input",
		"label",
		"popover",
		"radio-group",
		"select",
		"switch",
		"textarea"
	],
	"files": [
		{
			"path": "./app/page.tsx",
			"content": "import ExamplePage from '@/components/form/example-page'\n\nexport default function Home() {\n\treturn <ExamplePage />\n}\n",
			"type": "registry:example",
			"target": "./app/page.tsx"
		},
		{
			"path": "./components/action-button.tsx",
			"content": "'use client'\n\nimport { Loader2Icon } from 'lucide-react'\nimport { useFormStatus } from 'react-dom'\nimport { cn } from '../lib/utils'\nimport { Button, ButtonProps } from './ui/button'\n\nexport function ActionButton({ children, className, disabled, loading, ...props }: ButtonProps & { loading?: boolean }) {\n\tconst { pending } = useFormStatus()\n\n\treturn (\n\t\t<Button className={cn('relative', className)} disabled={disabled || loading || pending} type='submit' {...props}>\n\t\t\t<span className={cn('flex items-center', { invisible: loading || pending })}>{children}</span>\n\t\t\t{(loading || pending) && (\n\t\t\t\t<div className='absolute m-auto'>\n\t\t\t\t\t<Loader2Icon className='size-5 animate-spin' />\n\t\t\t\t</div>\n\t\t\t)}\n\t\t</Button>\n\t)\n}\n",
			"type": "registry:block",
      "target": "./components/action-button.tsx"
		},
		{
			"path": "./components/form/example-action.ts",
			"content": "'use server'\n\nimport { parseFormData } from '@cgambrell/utils'\nimport { z } from 'zod'\n\nexport async function exampleAction(_prevState: unknown, formData: FormData) {\n\tconst { data, errors } = parseFormData(\n\t\tformData,\n\t\tz.object({\n\t\t\tsidebar: z\n\t\t\t\t.string()\n\t\t\t\t.transform((value) => value.split(',').filter((v) => !!v.trim()))\n\t\t\t\t.pipe(z.array(z.string()).min(1, { message: 'You must select at least one item on the sidebar' })),\n\t\t\tusername: z.string().min(3, { message: 'Username must be at least 3 characters' }),\n\t\t\temail: z.string({ required_error: 'You must select an email address' }).min(1, { message: 'You must select an email address' }),\n\t\t\tmarketing: z.literal('on', { required_error: 'You must enable marketing emails' }),\n\t\t\tnotify: z.string({ required_error: 'You must select a notification preference' }),\n\t\t\tbio: z.string().min(10, { message: 'Bio must be at least 10 characters' }),\n\t\t\tlanguage: z.string().min(1, { message: 'You must select a language' }),\n\t\t\tlanguages: z\n\t\t\t\t.string()\n\t\t\t\t.transform((value) => value.split(',').filter((v) => !!v.trim()))\n\t\t\t\t.pipe(z.array(z.string()).min(1, { message: 'You must select at least one language' })),\n\t\t})\n\t)\n\n\tif (errors) return { errors }\n\treturn { data }\n}\n",
			"type": "registry:block",
      "target": "./components/form/example-action.ts"
		},
		{
			"path": "./components/form/example-page.tsx",
			"content": "'use client'\n\nimport { ActionButton } from '@/components/action-button'\nimport { FormCheckbox } from '@/components/form/form-checkbox'\nimport { FormCombobox } from '@/components/form/form-combobox'\nimport { FormInput } from '@/components/form/form-input'\nimport { FormRadioGroup } from '@/components/form/form-radio-group'\nimport { FormSelect } from '@/components/form/form-select'\nimport { FormSwitch } from '@/components/form/form-switch'\nimport { FormTextarea } from '@/components/form/form-textarea'\nimport { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'\nimport { useFormState } from 'react-dom'\nimport { exampleAction } from './example-action'\n\nexport default function ExamplePage() {\n\tconst [state, action] = useFormState(exampleAction, null)\n\tconst defaultValues = true\n\n\treturn (\n\t\t<div className='max-w-3xl mx-auto my-8 grid gap-4'>\n\t\t\t<Card>\n\t\t\t\t<CardHeader>\n\t\t\t\t\t<CardTitle>Form Components</CardTitle>\n\t\t\t\t\t<CardDescription>Form components are used to create forms in your application.</CardDescription>\n\t\t\t\t</CardHeader>\n\t\t\t\t<CardContent>\n\t\t\t\t\t<form action={action} className='grid gap-y-6 gap-x-2'>\n\t\t\t\t\t\t<FormCheckbox\n\t\t\t\t\t\t\tlabel='Sidebar'\n\t\t\t\t\t\t\tdesc='Select the items you want to display in the sidebar.'\n\t\t\t\t\t\t\tname='sidebar'\n\t\t\t\t\t\t\toptions={[\n\t\t\t\t\t\t\t\t{ label: 'Recents', value: 'recents' },\n\t\t\t\t\t\t\t\t{ label: 'Home', value: 'home' },\n\t\t\t\t\t\t\t\t{ label: 'Applications', value: 'applications' },\n\t\t\t\t\t\t\t\t{ label: 'Desktop', value: 'desktop' },\n\t\t\t\t\t\t\t\t{ label: 'Downloads', value: 'downloads' },\n\t\t\t\t\t\t\t\t{ label: 'Documents', value: 'documents' },\n\t\t\t\t\t\t\t]}\n\t\t\t\t\t\t\tdefaultValue={defaultValues ? ['recents', 'home'] : undefined}\n\t\t\t\t\t\t\terror={state?.errors?.sidebar}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<FormInput\n\t\t\t\t\t\t\tlabel='Username'\n\t\t\t\t\t\t\tname='username'\n\t\t\t\t\t\t\tplaceholder='shadcn'\n\t\t\t\t\t\t\tdesc='This is your public display name.'\n\t\t\t\t\t\t\tdefaultValue={defaultValues ? 'shadcn' : undefined}\n\t\t\t\t\t\t\terror={state?.errors?.username}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<FormSelect\n\t\t\t\t\t\t\tlabel='Email'\n\t\t\t\t\t\t\tname='email'\n\t\t\t\t\t\t\toptions={[\n\t\t\t\t\t\t\t\t{ label: 'm@example.com', value: 'm@example.com' },\n\t\t\t\t\t\t\t\t{ label: 'm@google.com', value: 'm@google.com' },\n\t\t\t\t\t\t\t\t{ label: 'm@support.com', value: 'm@support.com' },\n\t\t\t\t\t\t\t]}\n\t\t\t\t\t\t\tdesc='You can manage email addresses in your email settings.'\n\t\t\t\t\t\t\tdefaultValue={defaultValues ? 'm@example.com' : undefined}\n\t\t\t\t\t\t\terror={state?.errors?.email}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<FormSwitch\n\t\t\t\t\t\t\tlabel='Marketing emails'\n\t\t\t\t\t\t\tname='marketing'\n\t\t\t\t\t\t\tdesc='Receive emails about new products, features, and more.'\n\t\t\t\t\t\t\tdefaultChecked={defaultValues}\n\t\t\t\t\t\t\terror={state?.errors?.marketing}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<FormRadioGroup\n\t\t\t\t\t\t\tlabel='Notify me about...'\n\t\t\t\t\t\t\tname='notify'\n\t\t\t\t\t\t\toptions={[\n\t\t\t\t\t\t\t\t{ label: 'All new messages', value: 'all' },\n\t\t\t\t\t\t\t\t{ label: 'Direct messages and mentions', value: 'direct' },\n\t\t\t\t\t\t\t\t{ label: 'Nothing', value: 'none' },\n\t\t\t\t\t\t\t]}\n\t\t\t\t\t\t\tdefaultValue={defaultValues ? 'all' : undefined}\n\t\t\t\t\t\t\terror={state?.errors?.notify}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<FormTextarea\n\t\t\t\t\t\t\tlabel='Bio'\n\t\t\t\t\t\t\tname='bio'\n\t\t\t\t\t\t\tplaceholder='Tell us a little bit about yourself'\n\t\t\t\t\t\t\tdesc='You can @mention other users and organizations.'\n\t\t\t\t\t\t\tdefaultValue={defaultValues ? 'This is a little bit about myself' : undefined}\n\t\t\t\t\t\t\terror={state?.errors?.bio}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<FormCombobox\n\t\t\t\t\t\t\tlabel='Language'\n\t\t\t\t\t\t\tname='language'\n\t\t\t\t\t\t\toptions={[\n\t\t\t\t\t\t\t\t{ label: 'English', value: 'en' },\n\t\t\t\t\t\t\t\t{ label: 'French', value: 'fr' },\n\t\t\t\t\t\t\t\t{ label: 'German', value: 'de' },\n\t\t\t\t\t\t\t\t{ label: 'Spanish', value: 'es' },\n\t\t\t\t\t\t\t\t{ label: 'Portuguese', value: 'pt' },\n\t\t\t\t\t\t\t\t{ label: 'Russian', value: 'ru' },\n\t\t\t\t\t\t\t\t{ label: 'Japanese', value: 'ja' },\n\t\t\t\t\t\t\t\t{ label: 'Korean', value: 'ko' },\n\t\t\t\t\t\t\t\t{ label: 'Chinese', value: 'zh' },\n\t\t\t\t\t\t\t]}\n\t\t\t\t\t\t\tdesc='This is the language that will be used in the dashboard.'\n\t\t\t\t\t\t\tdefaultValue={defaultValues ? 'en' : undefined}\n\t\t\t\t\t\t\terror={state?.errors?.language}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<FormCombobox\n\t\t\t\t\t\t\tlabel='Languages'\n\t\t\t\t\t\t\tname='languages'\n\t\t\t\t\t\t\tmulti\n\t\t\t\t\t\t\toptions={[\n\t\t\t\t\t\t\t\t{ label: 'English', value: 'en' },\n\t\t\t\t\t\t\t\t{ label: 'French', value: 'fr' },\n\t\t\t\t\t\t\t\t{ label: 'German', value: 'de' },\n\t\t\t\t\t\t\t\t{ label: 'Spanish', value: 'es' },\n\t\t\t\t\t\t\t\t{ label: 'Portuguese', value: 'pt' },\n\t\t\t\t\t\t\t\t{ label: 'Russian', value: 'ru' },\n\t\t\t\t\t\t\t\t{ label: 'Japanese', value: 'ja' },\n\t\t\t\t\t\t\t\t{ label: 'Korean', value: 'ko' },\n\t\t\t\t\t\t\t\t{ label: 'Chinese', value: 'zh' },\n\t\t\t\t\t\t\t]}\n\t\t\t\t\t\t\tdesc='These are the languages that could be used in the dashboard.'\n\t\t\t\t\t\t\tdefaultValue={defaultValues ? ['en', 'es'] : undefined}\n\t\t\t\t\t\t\terror={state?.errors?.languages}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<ActionButton>Submit</ActionButton>\n\t\t\t\t\t</form>\n\t\t\t\t</CardContent>\n\t\t\t</Card>\n\t\t\t{state?.data && (\n\t\t\t\t<Card>\n\t\t\t\t\t<CardHeader>\n\t\t\t\t\t\t<CardTitle>Response</CardTitle>\n\t\t\t\t\t</CardHeader>\n\t\t\t\t\t<CardContent>\n\t\t\t\t\t\t<pre>{JSON.stringify(state.data, null, 2)}</pre>\n\t\t\t\t\t</CardContent>\n\t\t\t\t</Card>\n\t\t\t)}\n\t\t</div>\n\t)\n}\n",
			"type": "registry:block",
      "target": "./components/form/example-page.tsx"
		},
		{
			"path": "./components/form/form-checkbox.tsx",
			"content": "'use client'\n\nimport { cn } from '@/lib/utils'\nimport { useState } from 'react'\nimport { Checkbox } from '../ui/checkbox'\nimport { Label } from '../ui/label'\nimport { FormDescription } from './form-description'\nimport { FormError } from './form-error'\n\ntype FormCheckboxProps = {\n\tclassName?: string\n\tdefaultValue?: string[]\n\tdesc?: string\n\terror?: string[]\n\tlabel?: string\n\tname?: string\n\toptions: { label: string; value: string }[]\n\tvalue?: string[]\n\tonValueChange?: (value: string[]) => void\n}\n\nexport function FormCheckbox({\n\tclassName,\n\tdefaultValue,\n\tdesc,\n\terror,\n\tlabel,\n\tname,\n\toptions,\n\tvalue: _value,\n\tonValueChange,\n}: FormCheckboxProps) {\n\tconst [value, setValue] = useState<string[]>(_value ?? defaultValue ?? [])\n\n\treturn (\n\t\t<div className={cn('grid gap-2', className)}>\n\t\t\t<input type='hidden' name={name} value={value.join(',')} />\n\n\t\t\t{(label || desc) && (\n\t\t\t\t<div>\n\t\t\t\t\t{label && <Label htmlFor={name}>{label}</Label>}\n\t\t\t\t\t{desc && <FormDescription desc={desc} />}\n\t\t\t\t</div>\n\t\t\t)}\n\t\t\t<div className='ml-2 grid gap-1.5'>\n\t\t\t\t{options.map((option) => (\n\t\t\t\t\t<div key={option.value} className='flex flex-row items-start space-x-3'>\n\t\t\t\t\t\t<Checkbox\n\t\t\t\t\t\t\tid={`${name}-${option.value}`}\n\t\t\t\t\t\t\tchecked={value.includes(option.value)}\n\t\t\t\t\t\t\tonCheckedChange={(checked) => {\n\t\t\t\t\t\t\t\tconst newValue = checked ? [...value, option.value] : value.filter((value) => value !== option.value)\n\t\t\t\t\t\t\t\tsetValue(newValue)\n\t\t\t\t\t\t\t\tonValueChange?.(newValue)\n\t\t\t\t\t\t\t}}\n\t\t\t\t\t\t/>\n\t\t\t\t\t\t<Label className='mt-px' htmlFor={`${name}-${option.value}`}>\n\t\t\t\t\t\t\t{option.label}\n\t\t\t\t\t\t</Label>\n\t\t\t\t\t</div>\n\t\t\t\t))}\n\t\t\t</div>\n\t\t\t{error?.length && <FormError error={error} />}\n\t\t</div>\n\t)\n}\n",
			"type": "registry:block",
      "target": "./components/form/form-checkbox.tsx"
		},
		{
			"path": "./components/form/form-combobox.tsx",
			"content": "'use client'\n\nimport { cn } from '@/lib/utils'\nimport { Check, ChevronsUpDown } from 'lucide-react'\nimport { useMemo, useState } from 'react'\nimport { Button } from '../ui/button'\nimport { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command'\nimport { Label } from '../ui/label'\nimport { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'\nimport { FormDescription } from './form-description'\nimport { FormError } from './form-error'\n\ntype FormComboboxProps = {\n\tclassName?: string\n\tdefaultValue?: string | string[]\n\tdesc?: string\n\terror?: string[]\n\tlabel?: string\n\tmulti?: boolean\n\tname?: string\n\toptions: { label: string; value: string }[]\n\tvalue?: string | string[]\n\tonValueChange?: (value: string | string[]) => void\n}\n\ntype ComboboxValue<T extends boolean> = T extends true ? string[] : string\n\nexport function FormCombobox({\n\tclassName,\n\tdefaultValue,\n\tdesc,\n\terror,\n\tlabel,\n\tmulti = false,\n\tname,\n\toptions,\n\tvalue: _value,\n\tonValueChange,\n}: FormComboboxProps) {\n\tconst [value, setValue] = useState<ComboboxValue<typeof multi>>(_value ?? defaultValue ?? (multi ? [] : ''))\n\n\tconst placeholder = useMemo(() => {\n\t\tlet p\n\t\tif (Array.isArray(value))\n\t\t\tp = options\n\t\t\t\t.filter((option) => value.includes(option.value))\n\t\t\t\t.map((option) => option.label)\n\t\t\t\t.join(', ')\n\t\telse p = options.find((option) => option.value === value)?.label\n\n\t\tif (!p) p = 'Select an option'\n\t\treturn p\n\t}, [options, value])\n\n\treturn (\n\t\t<div className={cn('grid gap-2', className)}>\n\t\t\t<input type='hidden' name={name} value={Array.isArray(value) ? value.join(',') : value} />\n\n\t\t\t{label && <Label htmlFor={name}>{label}</Label>}\n\t\t\t<Popover>\n\t\t\t\t<PopoverTrigger asChild>\n\t\t\t\t\t<Button\n\t\t\t\t\t\tclassName={cn('justify-between', (Array.isArray(value) ? !value.length : !value) && 'text-muted-foreground')}\n\t\t\t\t\t\trole='combobox'\n\t\t\t\t\t\tvariant='outline'>\n\t\t\t\t\t\t<span className='overflow-hidden truncate'>{placeholder}</span>\n\t\t\t\t\t\t<ChevronsUpDown className='opacity-50' />\n\t\t\t\t\t</Button>\n\t\t\t\t</PopoverTrigger>\n\t\t\t\t<PopoverContent align='start' className='w-[250px] p-0'>\n\t\t\t\t\t<Command>\n\t\t\t\t\t\t<CommandInput placeholder='Search options...' className='h-9' />\n\t\t\t\t\t\t<CommandList>\n\t\t\t\t\t\t\t<CommandEmpty>No framework found.</CommandEmpty>\n\t\t\t\t\t\t\t<CommandGroup>\n\t\t\t\t\t\t\t\t{options.map((option) => (\n\t\t\t\t\t\t\t\t\t<CommandItem\n\t\t\t\t\t\t\t\t\t\tkey={option.value}\n\t\t\t\t\t\t\t\t\t\tvalue={option.label}\n\t\t\t\t\t\t\t\t\t\tonSelect={() => {\n\t\t\t\t\t\t\t\t\t\t\tif (Array.isArray(value)) {\n\t\t\t\t\t\t\t\t\t\t\t\tsetValue([...value, option.value])\n\t\t\t\t\t\t\t\t\t\t\t\tonValueChange?.([...value, option.value])\n\t\t\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\t\t\tsetValue(option.value)\n\t\t\t\t\t\t\t\t\t\t\t\tonValueChange?.(option.value)\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}}>\n\t\t\t\t\t\t\t\t\t\t{option.label}\n\t\t\t\t\t\t\t\t\t\t<Check\n\t\t\t\t\t\t\t\t\t\t\tclassName={cn(\n\t\t\t\t\t\t\t\t\t\t\t\t'ml-auto',\n\t\t\t\t\t\t\t\t\t\t\t\t(Array.isArray(value) ? value.includes(option.value) : value === option.value)\n\t\t\t\t\t\t\t\t\t\t\t\t\t? 'opacity-100'\n\t\t\t\t\t\t\t\t\t\t\t\t\t: 'opacity-0'\n\t\t\t\t\t\t\t\t\t\t\t)}\n\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t</CommandItem>\n\t\t\t\t\t\t\t\t))}\n\t\t\t\t\t\t\t</CommandGroup>\n\t\t\t\t\t\t</CommandList>\n\t\t\t\t\t</Command>\n\t\t\t\t</PopoverContent>\n\t\t\t</Popover>\n\t\t\t{desc && <FormDescription desc={desc} />}\n\t\t\t{error?.length && <FormError error={error} />}\n\t\t</div>\n\t)\n}\n",
			"type": "registry:block",
      "target": "./components/form/form-combobox.tsx"
		},
		{
			"path": "./components/form/form-description.tsx",
			"content": "export function FormDescription({ desc }: { desc?: string }) {\n\tif (!desc) return null\n\treturn <p className='text-xs text-muted-foreground/80'>{desc}</p>\n}\n",
			"type": "registry:block",
      "target": "./components/form/form-description.tsx"
		},
		{
			"path": "./components/form/form-error.tsx",
			"content": "'use client'\n\nexport function FormError({ error }: { error: string[] | undefined }) {\n\tif (!error || !error.length) return null\n\treturn <p className='text-sm text-destructive'>{error[0]}</p>\n}\n",
			"type": "registry:block",
      "target": "./components/form/form-error.tsx"
		},
		{
			"path": "./components/form/form-input.tsx",
			"content": "import { cn } from '@/lib/utils'\nimport { ComponentProps } from 'react'\nimport { Input } from '../ui/input'\nimport { Label } from '../ui/label'\nimport { FormDescription } from './form-description'\nimport { FormError } from './form-error'\n\ntype FormInputProps = ComponentProps<'input'> & { desc?: string; error?: string[]; label?: string }\n\nexport function FormInput({ className, desc, error, id, label, name, ...props }: FormInputProps) {\n\treturn (\n\t\t<div className={cn('grid gap-2', className)}>\n\t\t\t{label && <Label htmlFor={id ?? name}>{label}</Label>}\n\t\t\t<Input id={id ?? name} name={name ?? id} {...props} />\n\t\t\t{desc && <FormDescription desc={desc} />}\n\t\t\t{error?.length && <FormError error={error} />}\n\t\t</div>\n\t)\n}\n",
			"type": "registry:block",
      "target": "./components/form/form-input.tsx"
		},
		{
			"path": "./components/form/form-radio-group.tsx",
			"content": "import { cn } from '@/lib/utils'\nimport { RadioGroupProps } from '@radix-ui/react-radio-group'\nimport { Label } from '../ui/label'\nimport { RadioGroup, RadioGroupItem } from '../ui/radio-group'\nimport { FormDescription } from './form-description'\nimport { FormError } from './form-error'\n\ntype FormRadioGroupProps = RadioGroupProps & { desc?: string; error?: string[]; label: string; options: { label: string; value: string }[] }\n\nexport function FormRadioGroup({ className, desc, error, id, label, name, options, ...props }: FormRadioGroupProps) {\n\treturn (\n\t\t<div className={cn('grid gap-2', className)}>\n\t\t\t{label && <Label htmlFor={id ?? name}>{label}</Label>}\n\t\t\t<RadioGroup id={id ?? name} name={name ?? id} {...props}>\n\t\t\t\t{options.map((option) => (\n\t\t\t\t\t<div key={option.value} className='flex items-center space-x-2'>\n\t\t\t\t\t\t<RadioGroupItem value={option.value} id={`${name}-${option.value}`} />\n\t\t\t\t\t\t<Label htmlFor={`${name}-${option.value}`}>{option.label}</Label>\n\t\t\t\t\t</div>\n\t\t\t\t))}\n\t\t\t</RadioGroup>\n\t\t\t{desc && <FormDescription desc={desc} />}\n\t\t\t{error?.length && <FormError error={error} />}\n\t\t</div>\n\t)\n}\n",
			"type": "registry:block",
      "target": "./components/form/form-radio-group.tsx"
		},
		{
			"path": "./components/form/form-select.tsx",
			"content": "import { cn } from '@/lib/utils'\nimport { SelectProps } from '@radix-ui/react-select'\nimport { Label } from '../ui/label'\nimport { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'\nimport { FormDescription } from './form-description'\nimport { FormError } from './form-error'\n\ntype FormSelectProps = SelectProps & {\n\tclassName?: string\n\tdesc?: string\n\terror?: string[]\n\tlabel?: string\n\toptions: { label: string; value: string }[]\n}\n\nexport function FormSelect({ className, desc, error, label, name, options, ...props }: FormSelectProps) {\n\treturn (\n\t\t<div className={cn('grid gap-2', className)}>\n\t\t\t{label && <Label htmlFor={name}>{label}</Label>}\n\t\t\t<Select name={name} {...props}>\n\t\t\t\t<SelectTrigger className={className}>\n\t\t\t\t\t<SelectValue placeholder='Select an option' />\n\t\t\t\t</SelectTrigger>\n\t\t\t\t<SelectContent>\n\t\t\t\t\t{options.map((option) => (\n\t\t\t\t\t\t<SelectItem key={option.value} value={option.value}>\n\t\t\t\t\t\t\t{option.label}\n\t\t\t\t\t\t</SelectItem>\n\t\t\t\t\t))}\n\t\t\t\t</SelectContent>\n\t\t\t</Select>\n\t\t\t{desc && <FormDescription desc={desc} />}\n\t\t\t{error?.length && <FormError error={error} />}\n\t\t</div>\n\t)\n}\n",
			"type": "registry:block",
      "target": "./components/form/form-select.tsx"
		},
		{
			"path": "./components/form/form-switch.tsx",
			"content": "import { cn } from '@/lib/utils'\nimport { SwitchProps } from '@radix-ui/react-switch'\nimport { Label } from '../ui/label'\nimport { Switch } from '../ui/switch'\nimport { FormDescription } from './form-description'\nimport { FormError } from './form-error'\n\ntype FormSwitchProps = SwitchProps & { desc?: string; error?: string[]; label: string }\n\nexport function FormSwitch({ className, desc, error, id, label, name, ...props }: FormSwitchProps) {\n\treturn (\n\t\t<div className={cn('grid gap-2', className)}>\n\t\t\t<div className='flex items-center space-x-2'>\n\t\t\t\t<Switch id={id ?? name} name={name ?? id} {...props} />\n\t\t\t\t<Label htmlFor={id ?? name}>{label}</Label>\n\t\t\t</div>\n\t\t\t{desc && <FormDescription desc={desc} />}\n\t\t\t{error?.length && <FormError error={error} />}\n\t\t</div>\n\t)\n}\n",
			"type": "registry:block",
      "target": "./components/form/form-switch.tsx"
		},
		{
			"path": "./components/form/form-textarea.tsx",
			"content": "import { cn } from '@/lib/utils'\nimport { ComponentProps } from 'react'\nimport { Label } from '../ui/label'\nimport { Textarea } from '../ui/textarea'\nimport { FormDescription } from './form-description'\nimport { FormError } from './form-error'\n\ntype FormTextareaProps = ComponentProps<'textarea'> & { desc?: string; error?: string[]; label?: string }\n\nexport function FormTextarea({ className, desc, error, id, label, name, ...props }: FormTextareaProps) {\n\treturn (\n\t\t<div className={cn('grid gap-2', className)}>\n\t\t\t{label && <Label htmlFor={id ?? name}>{label}</Label>}\n\t\t\t<Textarea id={id ?? name} name={name ?? id} {...props} />\n\t\t\t{desc && <FormDescription desc={desc} />}\n\t\t\t{error?.length && <FormError error={error} />}\n\t\t</div>\n\t)\n}\n",
			"type": "registry:block",
      "target": "./components/form/form-textarea.tsx"
		}
	],
	"tailwind": {},
	"cssVars": {},
	"meta": {}
}
)
