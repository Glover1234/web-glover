import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Mission: React.FC = () => {
	const { t } = useTranslation('about');

	const cards = [
		{
			icon: Target,
			title: t('dna.mission.title'),
			content: t('dna.mission.content'),
		},
		{
			icon: Eye,
			title: t('dna.vision.title'),
			content: t('dna.vision.content'),
		},
		{
			icon: Heart,
			title: t('dna.values.title'),
			content: t('dna.values.items', { returnObjects: true }) as string[],
		},
	];

	return (
		<div className="container mx-auto px-4 mb-10">
			{/* Divider */}
			<div className="border-t border-gray-200 mb-6 max-w-4xl mx-auto"></div>

			{/* Header */}
			<motion.div
				className="text-center mb-6 py-2"
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
			>
				<h2 className="text-lg sm:text-xl lg:text-2xl font-bold uppercase mb-2 text-red-600 tracking-wide">
					{t('dna.title')}
				</h2>
				<motion.div
					className="h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto w-20 rounded-full"
					initial={{ width: 0 }}
					whileInView={{ width: '5rem' }}
					transition={{ delay: 0.3, duration: 0.6 }}
					viewport={{ once: true }}
				/>
			</motion.div>

			{/* Mobile Layout: Simple stack */}
			<div className="block md:hidden space-y-3">
				{cards.map((card, i) => (
					<motion.div
						key={card.title}
						className="bg-white rounded-lg shadow-md p-2.5 mx-auto max-w-xs"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: i * 0.1 }}
						viewport={{ once: true }}
					>
						<div className="w-full flex items-center gap-1.5 mb-1.5">
							<div className="p-0.5 bg-red-100 rounded">
								{React.createElement(card.icon, { className: "w-3.5 h-3.5 text-red-600" })}
							</div>
							<span className="text-xs font-bold text-gray-800">
								{card.title}
							</span>
						</div>

						<div className="text-gray-700 text-[10px] leading-relaxed text-justify">
							{Array.isArray(card.content) ? (
								<ul className="list-none space-y-0.5">
									{card.content.map((val, idx) => (
										<li key={idx} className="flex items-start gap-1">
											<span className="w-1 h-1 bg-red-600 rounded-full mt-1 flex-shrink-0"></span>
											<span>{val}</span>
										</li>
									))}
								</ul>
							) : (
								<p className="leading-relaxed">
									{card.content}
								</p>
							)}
						</div>
					</motion.div>
				))}
			</div>

			{/* Desktop Pyramid Layout */}
			<div className="hidden md:block max-w-4xl mx-auto relative py-4">
				{/* Triangle SVG Background */}
				<svg 
					className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-20 pointer-events-none"
					width="100%" 
					height="380" 
					viewBox="0 0 900 380"
					preserveAspectRatio="xMidYMid meet"
				>
					<path 
						d="M 450 20 L 760 350 L 140 350 Z" 
						fill="none" 
						stroke="#dc2626" 
						strokeWidth="2"
						strokeLinejoin="round"
					/>
				</svg>

				{/* Cards positioned at triangle vertices */}
				<div className="relative h-[380px] flex justify-center">
					{/* Top vertex - Mission - Centered properly */}
					<motion.div
						className="absolute top-0 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-2.5 w-[260px] z-10"
						style={{ left: 'calc(50% - 130px)' }}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0 }}
						viewport={{ once: true }}
					>
						<div className="w-full flex items-center gap-1.5 mb-1.5">
							<div className="p-0.5 bg-red-100 rounded">
								{React.createElement(cards[0].icon, { className: "w-3.5 h-3.5 text-red-600" })}
							</div>
							<span className="text-sm font-bold text-gray-800">
								{cards[0].title}
							</span>
						</div>

						<div className="text-gray-700 text-[10px] leading-relaxed text-justify">
							{Array.isArray(cards[0].content) ? (
								<ul className="list-none space-y-0.5">
									{cards[0].content.map((val, idx) => (
										<li key={idx} className="flex items-start gap-1">
											<span className="w-1 h-1 bg-red-600 rounded-full mt-1 flex-shrink-0"></span>
											<span>{val}</span>
										</li>
									))}
								</ul>
							) : (
								<p className="leading-relaxed">
									{cards[0].content}
								</p>
							)}
						</div>
					</motion.div>

					{/* Bottom left vertex - Vision */}
					<motion.div
						className="absolute bottom-0 left-[10%] bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-2.5 w-[260px] z-10"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						viewport={{ once: true }}
					>
						<div className="w-full flex items-center gap-1.5 mb-1.5">
							<div className="p-0.5 bg-red-100 rounded">
								{React.createElement(cards[1].icon, { className: "w-3.5 h-3.5 text-red-600" })}
							</div>
							<span className="text-sm font-bold text-gray-800">
								{cards[1].title}
							</span>
						</div>

						<div className="text-gray-700 text-[10px] leading-relaxed text-justify">
							{Array.isArray(cards[1].content) ? (
								<ul className="list-none space-y-0.5">
									{cards[1].content.map((val, idx) => (
										<li key={idx} className="flex items-start gap-1">
											<span className="w-1 h-1 bg-red-600 rounded-full mt-1 flex-shrink-0"></span>
											<span>{val}</span>
										</li>
									))}
								</ul>
							) : (
								<p className="leading-relaxed">
									{cards[1].content}
								</p>
							)}
						</div>
					</motion.div>

					{/* Bottom right vertex - Values */}
					<motion.div
						className="absolute bottom-0 right-[10%] bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-2.5 w-[260px] z-10"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						viewport={{ once: true }}
					>
						<div className="w-full flex items-center gap-1.5 mb-1.5">
							<div className="p-0.5 bg-red-100 rounded">
								{React.createElement(cards[2].icon, { className: "w-3.5 h-3.5 text-red-600" })}
							</div>
							<span className="text-sm font-bold text-gray-800">
								{cards[2].title}
							</span>
						</div>

						<div className="text-gray-700 text-[10px] leading-relaxed text-justify">
							{Array.isArray(cards[2].content) ? (
								<ul className="list-none space-y-0.5">
									{cards[2].content.map((val, idx) => (
										<li key={idx} className="flex items-start gap-1">
											<span className="w-1 h-1 bg-red-600 rounded-full mt-1 flex-shrink-0"></span>
											<span>{val}</span>
										</li>
									))}
								</ul>
							) : (
								<p className="leading-relaxed">
									{cards[2].content}
								</p>
							)}
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Mission;
