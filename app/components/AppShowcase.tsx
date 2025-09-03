'use client';

interface App {
	id: number;
	name: string;
	description: string;
	technologies: string[];
	platforms: string[];
	downloads: string;
	rating: number;
	appStoreUrl?: string;
	playStoreUrl?: string;
}

const apps: App[] = [
	{
		id: 1,
		name: 'RunPickQuick Customer',
		description: 'Complete logistics and delivery ecosystem customer app. Users can request pickups, track deliveries in real-time, manage multiple addresses, and make secure payments. Features include live GPS tracking, delivery scheduling, and comprehensive order history.',
		technologies: ['Flutter', 'GetX', 'Google Maps', 'Real-time Tracking', 'Payment Gateway', 'Push Notifications'],
		platforms: ['iOS', 'Android'],
		downloads: '10K+',
		rating: 4.8,
		appStoreUrl: 'https://apps.apple.com/us/app/runpickquick/id6738142874',
		playStoreUrl: 'https://play.google.com/store/apps/details?id=com.runpickquick.customer'
	},
	{
		id: 2,
		name: 'RunPickQuick Driver',
		description: 'Professional driver companion app for the RunPickQuick delivery ecosystem. Drivers can accept orders, navigate efficiently, update delivery status, and manage earnings. Includes route optimization, real-time communication, and comprehensive analytics dashboard.',
		technologies: ['Flutter', 'GetX', 'Google Maps', 'Route Optimization', 'Real-time Updates', 'Analytics'],
		platforms: ['iOS', 'Android'],
		downloads: '5K+',
		rating: 4.7,
		appStoreUrl: 'https://apps.apple.com/us/app/runpickquick-driver/id6738149689',
		playStoreUrl: 'https://play.google.com/store/apps/details?id=com.runpickquick.driver'
	},
	{
		id: 3,
		name: 'WishHealth for Doctors',
		description: 'Premium B2B healthcare application designed specifically for medical professionals. Doctors can manage patient appointments, access medical records, conduct virtual consultations, and streamline their practice workflow. Features secure patient data handling and HIPAA compliance.',
		technologies: ['Flutter', 'Provider', 'Video Calling', 'Secure Storage', 'Calendar Integration', 'Medical APIs'],
		platforms: ['iOS', 'Android'],
		downloads: '25K+',
		rating: 4.9,
		appStoreUrl: 'https://apps.apple.com/us/app/wishhealth-for-doctors/id1497794891',
		playStoreUrl: 'https://play.google.com/store/apps/details?id=com.wishhealth.doctors'
	},
	{
		id: 4,
		name: 'Move Fitness App',
		description: 'Comprehensive fitness and lifestyle application with personalized workout plans, nutrition tracking, and progress monitoring. Users can access guided workouts, track calories, set fitness goals, and connect with fitness communities. Includes wearable device integration.',
		technologies: ['Flutter', 'Bloc', 'Health APIs', 'Charts', 'Social Features', 'Wearable Integration'],
		platforms: ['iOS', 'Android'],
		downloads: '50K+',
		rating: 4.6,
		appStoreUrl: 'https://apps.apple.com/us/app/move-fitness-app/id1623388100',
		playStoreUrl: 'https://play.google.com/store/apps/details?id=com.movefitness.app'
	},
	{
		id: 5,
		name: 'SecondChance Marketplace',
		description: 'Sustainable marketplace for buying and selling pre-owned items. Users can list products with detailed descriptions, browse categories, negotiate prices, and arrange secure transactions. Features include image recognition for product categorization and built-in chat system.',
		technologies: ['Flutter', 'GetX', 'Image Processing', 'Chat System', 'Payment Integration', 'Location Services'],
		platforms: ['iOS', 'Android'],
		downloads: '15K+',
		rating: 4.5,
		appStoreUrl: 'https://apps.apple.com/in/app/secondchance/id6502994190',
		playStoreUrl: 'https://play.google.com/store/apps/details?id=com.secondchance.marketplace'
	},
	{
		id: 6,
		name: 'BuddyPass Travel Planner',
		description: 'Intelligent travel planning companion that helps users create detailed itineraries, discover destinations, book accommodations, and share travel experiences. Features include offline maps, expense tracking, and collaborative trip planning with friends.',
		technologies: ['Flutter', 'Provider', 'Maps Integration', 'Offline Storage', 'Social Sharing', 'Travel APIs'],
		platforms: ['iOS', 'Android'],
		downloads: '8K+',
		rating: 4.4,
		appStoreUrl: 'https://apps.apple.com/us/app/buddypass/id6449385742',
		playStoreUrl: 'https://play.google.com/store/apps/details?id=com.buddypass.travel'
	}
];

const AppShowcase = () => {
	const handleAppClick = (app: App) => {
		// Detect if user is on iOS or Android device
		const userAgent = navigator.userAgent || navigator.vendor;
		const isIOS = /iPad|iPhone|iPod/.test(userAgent);
		const isAndroid = /android/i.test(userAgent);
		
		if (isIOS && app.appStoreUrl) {
			window.open(app.appStoreUrl, '_blank');
		} else if (isAndroid && app.playStoreUrl) {
			window.open(app.playStoreUrl, '_blank');
		} else {
			// Default to App Store for desktop users
			window.open(app.appStoreUrl || app.playStoreUrl, '_blank');
		}
	};

	return (
		<section className="py-16 md:py-20 relative">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Apps</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
					{apps.map((app) => (
						<div 
							key={app.id} 
							className="group bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl sm:rounded-2xl p-1 cursor-pointer hover:scale-105 transition-transform duration-300"
							onClick={() => handleAppClick(app)}
						>
							<div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 relative">
								<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
									{/* App Icon */}
									<div className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-1 flex-shrink-0">
										<div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center overflow-hidden relative">
											{/* Use the same icon for all apps */}
											<svg className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
												/>
											</svg>
											{/* Animated Glow Effect */}
											<div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 animate-shimmer"></div>
										</div>
										{/* Corner Decorations */}
										<div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full blur-[2px]"></div>
										<div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-400 rounded-full blur-[2px]"></div>
									</div>

									{/* App Info */}
									<div className="flex-grow w-full sm:w-auto">
										<div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-2">
											<h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors text-center sm:text-left break-words">{app.name}</h3>
											<span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap">
												{app.id === 1 ? 'Featured' : 'New'}
											</span>
										</div>
										<p className="text-gray-400 mb-4 text-center sm:text-left">{app.description}</p>

										{/* Technologies */}
										<div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
											{app.technologies.map((tech) => (
												<span
													key={tech}
													className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-400 border border-gray-700/50 group-hover:border-gray-600/50 group-hover:text-gray-300 transition-colors whitespace-nowrap"
												>
													{tech}
												</span>
											))}
										</div>

										{/* Stats */}
										<div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-400">
											<div className="flex items-center gap-1.5">
												<svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
													<path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
												</svg>
												<span>{app.rating}</span>
											</div>
											<div className="flex items-center gap-1.5">
												<svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
													<path d="M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03M19,18H6A4,4 0 0,1 2,14C2,11.95 3.53,10.24 5.56,10.03L6.63,9.92L7.13,8.97C8.08,7.14 9.94,6 12,6C14.62,6 16.88,7.86 17.39,10.43L17.69,11.93L19.22,12.04C20.78,12.14 22,13.45 22,15A3,3 0 0,1 19,18M8,13H10.55V16H13.45V13H16L12,9L8,13Z" />
												</svg>
												<span>{app.downloads}</span>
											</div>
											<div className="flex items-center gap-1.5">
												<svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
													<path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H8V11H16V13M16,9H8V7H16V9M7,24H9V22H7V24M11,24H13V22H11V24M15,24H17V22H15V24" />
												</svg>
												<span>{app.platforms.join(' & ')}</span>
											</div>
										</div>

										{/* Store Links */}
										<div className="flex justify-center sm:justify-start gap-3 mt-4">
											{app.appStoreUrl && (
												<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-colors text-xs">
													<svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
														<path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
													</svg>
													<span className="text-gray-300">App Store</span>
												</div>
											)}
											{app.playStoreUrl && (
												<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-green-500/50 transition-colors text-xs">
													<svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
														<path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
													</svg>
													<span className="text-gray-300">Play Store</span>
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AppShowcase;
