export const GET = () =>
	Response.json({
		name: 'terms',
		type: 'registry:block',
		dependencies: ['@cgambrell/utils', '@mdx-js/loader', '@mdx-js/react', '@next/mdx', '@tailwindcss/typography', '@types/mdx'],
		devDependencies: [],
		registryDependencies: [],
		files: [
			{
				path: './app/(terms)/constants.ts',
				content:
					"import { CommandIcon } from 'lucide-react'\n\n// TODO: Real terms data\nexport const MOCK_TERMS = {\n\t// TODO: Real app name\n\tappName: 'Acme Inc',\n\t// TODO: Real app icon\n\tappIcon: CommandIcon,\n\tarbitration: 'Arbitration',\n\temail: 'me@example.com',\n\tjurisdiction: 'California',\n\tmailingAddress: '1234 Main St, Anytown, USA',\n\tminimumAge: 13,\n\tphone: '(555) 123-4567',\n}\n",
				type: 'registry:example',
				target: './app/(terms)/constants.ts',
			},
			{
				path: './app/(terms)/layout.tsx',
				content:
					"import { LayoutProps } from '@cgambrell/utils'\nimport Link from 'next/link'\nimport { MOCK_TERMS } from './constants'\n\nexport default function TermsLayout({ children }: LayoutProps) {\n\treturn (\n\t\t<div className='mx-auto max-w-screen-md px-4 py-12 prose prose-sm'>\n\t\t\t<Link className='flex items-center text-xl font-medium mb-8' href='/'>\n\t\t\t\t<MOCK_TERMS.appIcon className='mr-2 h-6 w-6' />\n\t\t\t\t<span>{MOCK_TERMS.appName}</span>\n\t\t\t</Link>\n\t\t\t<div>{children}</div>\n\t\t</div>\n\t)\n}\n",
				type: 'registry:example',
				target: './app/(terms)/layout.tsx',
			},
			{
				path: './app/(terms)/privacy/page.mdx',
				content:
					'import { MOCK_TERMS } from \'../constants\'\n\n**Privacy Notice**\n\n_Last Updated: 2024-10-10_\n\n---\n\n**1. Introduction**\n\nWelcome to {MOCK_TERMS.appName} ("we," "us," or "our"). This Privacy Notice describes how we collect, use, disclose, and safeguard your personal information when you use our services, including our website and any related applications (collectively, the "Service").\n\n**2. Information We Collect**\n\n-   **Personal Data:** We may collect personally identifiable information such as your name, email address, phone number, and mailing address when you register for an account, subscribe to a newsletter, or fill out a form.\n\n-   **Usage Data:** We collect information on how you access and use the Service ("Usage Data"). This may include your IP address, browser type, pages visited, time and date of visit, and other diagnostic data.\n\n-   **Cookies and Tracking Technologies:** We use cookies, web beacons, and similar tracking technologies to track the activity on our Service and hold certain information.\n\n**3. How We Use Your Information**\n\nWe use the collected data for various purposes:\n\n-   **To Provide and Maintain the Service:** Ensuring the Service functions correctly and providing customer support.\n\n-   **To Notify You of Changes:** Informing you about updates or changes to our Service.\n\n-   **To Allow Participation in Interactive Features:** Enabling you to participate in interactive features when you choose to do so.\n\n-   **To Monitor Usage:** Tracking and analyzing usage and trends to improve user experience.\n\n-   **To Communicate with You:** Sending newsletters, marketing materials, and other information that may be of interest to you.\n\n**4. Disclosure of Your Information**\n\n-   **Business Transactions:** If we are involved in a merger, acquisition, or asset sale, your personal data may be transferred.\n\n-   **Legal Requirements:** We may disclose your information if required to do so by law or in response to valid requests by public authorities.\n\n-   **Third-Party Service Providers:** We may employ third-party companies to facilitate our Service, perform Service-related services, or assist us in analyzing how our Service is used.\n\n**5. Security of Your Information**\n\nWe value your trust in providing us your personal information and strive to use commercially acceptable means of protecting it. However, no method of transmission over the internet or electronic storage is 100% secure.\n\n**6. Your Rights**\n\nDepending on your jurisdiction, you may have the following data protection rights:\n\n-   **Access:** Request access to the personal data we hold about you.\n\n-   **Correction:** Request correction of any inaccurate or incomplete data.\n\n-   **Deletion:** Request deletion of your personal data under certain circumstances.\n\n-   **Opt-Out:** Opt-out of receiving marketing communications from us.\n\n**7. Children\'s Privacy**\n\nOur Service is not intended for individuals under the age of {MOCK_TERMS.minimumAge}. We do not knowingly collect personally identifiable information from anyone under this age.\n\n**8. International Data Transfers**\n\nYour information, including personal data, may be transferred to—and maintained on—computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ.\n\n**9. Changes to This Privacy Notice**\n\nWe may update our Privacy Notice from time to time. Any changes will be posted on this page with an updated "Last Updated" date.\n\n**10. Contact Us**\n\nIf you have any questions or concerns about this Privacy Notice, please contact us at:\n\n-   **Email:** {MOCK_TERMS.email}\n-   **Mailing Address:** {MOCK_TERMS.mailingAddress}\n-   **Phone Number:** {MOCK_TERMS.phone}\n\n---\n\n_Please customize this Privacy Notice to suit your specific needs and consult with a legal professional to ensure compliance with all applicable laws and regulations._\n',
				type: 'registry:example',
				target: './app/(terms)/privacy/page.mdx',
			},
			{
				path: './app/(terms)/terms/page.mdx',
				content:
					'import { MOCK_TERMS } from \'../constants\'\n\n**Terms of Service**\n\n_Last Updated: 2024-10-10_\n\n**1. Acceptance of Terms**\n\nBy accessing or using our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all the terms and conditions, then you may not access the service.\n\n**2. Modification of Terms**\n\nWe reserve the right to modify or replace these Terms at any time. It is your responsibility to check this page periodically for changes. Your continued use of the service after any such changes constitutes acceptance of those changes.\n\n**3. Eligibility**\n\nYou must be at least {MOCK_TERMS.minimumAge} years old to use our services. By using the service, you represent and warrant that you meet this eligibility requirement.\n\n**4. User Accounts**\n\n-   **Account Responsibility:** You are responsible for maintaining the confidentiality of your account and password.\n-   **Account Security:** You agree to notify us immediately of any unauthorized use of your account.\n\n**5. Use of the Service**\n\n-   **Prohibited Activities:** You agree not to engage in any activities that violate any applicable laws or regulations.\n-   **User Content:** You retain ownership of any content you submit but grant us a license to use, display, and distribute such content.\n\n**6. Intellectual Property**\n\nAll content and materials on the service are the property of {MOCK_TERMS.appName} or its licensors and are protected by intellectual property laws.\n\n**7. Third-Party Links**\n\nOur service may contain links to third-party websites or services that are not owned or controlled by us. We assume no responsibility for the content or practices of any third-party sites.\n\n**8. Termination**\n\nWe may terminate or suspend your account immediately, without prior notice, for any reason whatsoever, including but not limited to a breach of the Terms.\n\n**9. Limitation of Liability**\n\nIn no event shall {MOCK_TERMS.appName}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect or consequential damages arising out of your use of the service.\n\n**10. Indemnification**\n\nYou agree to defend, indemnify, and hold harmless {MOCK_TERMS.appName} and its affiliates from any claims, damages, or demands arising out of your use of the service.\n\n**11. Governing Law**\n\nThese Terms shall be governed and construed in accordance with the laws of {MOCK_TERMS.jurisdiction}, without regard to its conflict of law provisions.\n\n**12. Dispute Resolution**\n\nAny disputes arising out of these Terms shall be resolved through {MOCK_TERMS.arbitration} in {MOCK_TERMS.jurisdiction}.\n\n**13. Severability**\n\nIf any provision of these Terms is held to be unenforceable, the remaining provisions shall remain in effect.\n\n**14. Entire Agreement**\n\nThese Terms constitute the entire agreement between us regarding our service and supersede any prior agreements.\n\n**15. Contact Us**\n\nIf you have any questions about these Terms, please contact us at {MOCK_TERMS.email}.\n\n---\n\n_Please customize these Terms of Service to suit your specific needs and consult with a legal professional to ensure compliance with all applicable laws and regulations._\n',
				type: 'registry:example',
				target: './app/(terms)/terms/page.mdx',
			},
			{
				path: './mdx-components.tsx',
				content:
					"import type { MDXComponents } from 'mdx/types'\n\nexport function useMDXComponents(components: MDXComponents): MDXComponents {\n\treturn {\n\t\t...components,\n\t}\n}\n",
				type: 'registry:example',
				target: '~/mdx-components.tsx',
			},
			{
				path: './next.config.mjs',
				content:
					"import createMDX from '@next/mdx'\n\n/** @type {import('next').NextConfig} */\nconst nextConfig = {\n\tpageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],\n}\n\nconst withMDX = createMDX({})\nexport default withMDX(nextConfig)\n",
				type: 'registry:example',
				target: '~/next.config.mjs',
			},
		],
		tailwind: {
			config: '{ "plugins": ["require("tailwindcss-animate")"] }',
		},
		cssVars: {},
		meta: {},
	})
