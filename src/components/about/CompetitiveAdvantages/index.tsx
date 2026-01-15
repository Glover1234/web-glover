import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Factory, Cog, TrendingUp, Award, Leaf } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import advantageImage1 from '../../../assets/processes/photos/pintura2.JPG';
import advantageImage2 from '../../../assets/processes/photos/cnc2.JPG';
import advantageImage3 from '../../../assets/processes/photos/encuadradora2.JPG';
import advantageImage4 from '../../../assets/furniture/muebles/muebles4.jpeg';
import advantageImage5 from '../../../assets/sustainability/sostenibilidad.jpeg';

const icons = [Factory, Cog, TrendingUp, Award, Leaf];
const images = [advantageImage1, advantageImage2, advantageImage3, advantageImage4, advantageImage5];

const CompetitiveAdvantages: React.FC = () => {
	const { t } = useTranslation('about');
	const [selectedIndex, setSelectedIndex] = useState(0);
	const advantages = t('advantages.items', { returnObjects: true }) as Array<{
		title: string;
		description: string;
		details: string;
	}>;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			className="mb-20 pt-16"
		>
			<motion.div
				className="text-center mb-10"
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
			>
				<h2 className="text-2xl md:text-3xl font-bold uppercase mb-3 text-neutral-900">
					{t('advantages.title')}
				</h2>
				<div className="w-20 h-0.5 bg-red-600 mx-auto"></div>
			</motion.div>

			<div className="max-w-6xl mx-auto">
				{/* Top icons bar */}
				<div className="flex gap-2 mb-6 justify-center flex-wrap">
					{advantages.map((advantage, index) => {
						const Icon = icons[index];
						return (
							<motion.button
								key={advantage.title}
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
										layoutId="activeAdvantageIndicator"
										className="absolute top-0 left-0 right-0 h-1 rounded-b-full bg-red-600"
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

				{/* Content area */}
				<div className="bg-white rounded-xl shadow-lg overflow-hidden">
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
										{advantages[selectedIndex].title}
									</h3>
								</div>

								<div className="space-y-4">
									<p className="text-gray-700 leading-relaxed text-base md:text-lg font-medium">
										{advantages[selectedIndex].description}
									</p>
									<p className="text-gray-600 leading-relaxed text-sm md:text-base">
										{advantages[selectedIndex].details}
									</p>
								</div>
							</div>
							
							{/* Right: Image */}
							<div className="relative h-64 md:h-full min-h-[300px] rounded-lg overflow-hidden shadow-md">
								<img
									src={images[selectedIndex]}
									alt={advantages[selectedIndex].title}
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default CompetitiveAdvantages;
