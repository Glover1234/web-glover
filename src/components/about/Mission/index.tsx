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
		<div className="mb-0">
			{/* Header */}
			<motion.div
				className="text-center mb-8"
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
			>
				<h2 className="text-2xl font-bold uppercase mb-2 text-red-600 tracking-wide">
					{t('dna.title')}
				</h2>
				<div className="w-24 h-0.5 bg-red-600 mx-auto"></div>
			</motion.div>

			{/* Cards in vertical stack */}
			<div className="space-y-4">
				{cards.map((card, i) => (
					<motion.div
						key={card.title}
						className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 border-l-4 border-red-600"
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: i * 0.1 }}
						viewport={{ once: true }}
					>
						<div className="flex items-start gap-3 mb-3">
							<div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
								{React.createElement(card.icon, { className: "w-6 h-6 text-red-600" })}
							</div>
							<div className="flex-1">
								<h3 className="text-lg font-bold text-gray-800">
									{card.title}
								</h3>
							</div>
						</div>

						<div className="text-gray-700 text-sm leading-relaxed pl-15">
							{Array.isArray(card.content) ? (
								<ul className="list-none space-y-2">
									{card.content.map((val, idx) => (
										<li key={idx} className="flex items-start gap-2">
											<span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
											<span>{val}</span>
										</li>
									))}
								</ul>
							) : (
								<p>{card.content}</p>
							)}
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Mission;
