import { APP_NAME, MOCK_APP_ICON } from '@/lib/constants'
import { LayoutProps } from '@cgambrell/utils'
import Link from 'next/link'

export default function ComponentsLayout({ children }: LayoutProps) {
	return (
		<div className='mx-auto max-w-screen-md px-4 py-12 prose prose-sm'>
			<Link className='flex items-center text-xl font-medium mb-8' href='/'>
				<MOCK_APP_ICON className='mr-2 h-6 w-6' />
				<span>{APP_NAME}</span>
			</Link>
			<div>{children}</div>
		</div>
	)
}
