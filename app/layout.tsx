import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Waqas - Mobile Developer',
	description:
		'Welcome to my portfolio! I am Waqas, a passionate mobile developer crafting beautiful and performant apps for iOS and Android. Specializing in native and cross-platform development, I create engaging mobile experiences that users love.',
	keywords: [
		'Mobile Developer',
		'iOS Developer',
		'Android Developer',
		'React Native',
		'Flutter',
		'Swift',
		'Kotlin',
		'Mobile Apps',
		'Cross-Platform Development',
		'Native Development',
		'Mobile UI/UX',
		'App Store',
		'Play Store',
		'Mobile Architecture',
		'Waqas',
	],
	authors: [{ name: 'Waqas' }],
	creator: 'Waqas',
	openGraph: {
		title: 'Waqas - Mobile Developer Portfolio',
		description: 'Passionate mobile developer creating exceptional iOS and Android applications. Explore my projects and app development expertise.',
		url: 'https://your-domain.com',
		siteName: 'Waqas - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Waqas - Mobile Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Waqas - Mobile Developer',
		description: 'Passionate mobile developer creating exceptional iOS and Android applications. Explore my projects and app development expertise.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
