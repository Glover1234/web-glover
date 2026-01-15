import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Award, Leaf, DollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import laborImage4 from '../../assets/sustainability/sostenibilidad.jpeg';
import sordomudoImage from '../../assets/home_banner/sordomudo.svg';

const icons = [Briefcase, Users, Award, Leaf, DollarSign];
const images = [
	'https://plus.unsplash.com/premium_photo-1661963959582-e53ff1ad22f5?w=1200&h=800&fit=crop&q=80',
	sordomudoImage,
	'https://plus.unsplash.com/premium_photo-1674730949906-f02cd80763b6?w=1200&h=800&fit=crop&q=80', 
	laborImage4, 
	'https://images.unsplash.com/photo-1595714004311-8a4ca448c20e?w=1200&h=800&fit=crop&q=80'
];

const LaborTopicsCards: React.FC = () => {
	const { t } = useTranslation('about');
	const [selectedIndex, setSelectedIndex] = useState(0);
	
	const cards = t('laborTopics.items', { returnObjects: true }) as Array<{
		title: string;
		content: string;
	}>;

	return (
		<div className="container mx-auto px-4 mb-16">
			<motion.div
				className="text-center mb-10"
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
			>
				<h2 className="text-2xl md:text-3xl font-bold uppercase mb-3 text-neutral-900">
					{t('laborTopics.title')}
				</h2>
				<div className="w-20 h-0.5 bg-red-600 mx-auto"></div>
			</motion.div>

			<div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
				{/* Left sidebar with icons */}
				<div className="flex md:flex-col gap-2 md:w-24 flex-shrink-0">
					{cards.map((card, index) => {
						const Icon = icons[index];
						return (
							<motion.button
								key={card.title}
								onClick={() => setSelectedIndex(index)}
								className={`relative p-3 rounded-lg transition-all duration-300 ${
									selectedIndex === index 
										? 'bg-white shadow-lg' 
										: 'bg-white/50 hover:bg-white/80 shadow-md'
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{selectedIndex === index && (
									<motion.div
										layoutId="activeLaborIndicator"
										className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-red-600"
									/>
								)}
								
								<div className="flex items-center justify-center w-10 h-10">
									<Icon className={`w-5 h-5 transition-colors duration-300 ${
										selectedIndex === index ? 'text-gray-700' : 'text-gray-500'
									}`} />
								</div>
							</motion.button>
						);
					})}
				</div>

				{/* Right content area */}
				<div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden">
					<motion.div
						key={selectedIndex}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						className="p-6 md:p-8"
					>
						{/* Title with gradient */}
						<div className="h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-6"></div>
						
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{/* Left: Content */}
							<div>
								<div className="flex items-start gap-4 mb-6">
									<div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
										{React.createElement(icons[selectedIndex], { 
											className: "w-6 h-6 text-red-600" 
										})}
									</div>
									<h3 className="text-xl md:text-2xl font-bold text-neutral-900">
										{cards[selectedIndex].title}
									</h3>
								</div>

								<div className="prose max-w-none">
									<p className="text-gray-600 leading-relaxed text-base md:text-lg">
										{cards[selectedIndex].content}
									</p>
								</div>
							</div>
							
							{/* Right: Image */}
							<div className="relative h-64 md:h-full min-h-[300px] rounded-lg overflow-hidden shadow-md">
								<img
									src={images[selectedIndex]}
									alt={cards[selectedIndex].title}
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default LaborTopicsCards;
