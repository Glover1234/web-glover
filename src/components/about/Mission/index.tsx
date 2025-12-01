import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const cards = [
	{
		icon: Target,
		title: 'MISIÓN',
		content: `Entregar soluciones de excelencia en productos derivados de la madera, lograr un desarrollo sostenible, armonizando el crecimiento económico, la inclusión social y protección ambiental, creando valor para nuestros accionistas, colaboradores y clientes.`,
	},
	{
		icon: Eye,
		title: 'VISIÓN',
		content: `Posicionar Glover en Chile e internacionalmente como una empresa líder en la fabricación de productos derivados de la madera, ser un referente de calidad, innovación y confianza para sus consumidores.`,
	},
	{
		icon: Heart,
		title: 'VALORES',
		content: [
			'Excelencia en calidad',
			'Innovación constante',
			'Compromiso ambiental',
		],
	},
];

const Mission: React.FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

	return (
		<div className="container mx-auto px-4 mb-16">
			{/* Header - Más destacado */}
			<motion.div
				className="text-center mb-8 py-8"
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
			>
				<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 text-red-600 tracking-wide">
					EL ADN DE GLOVER
				</h2>
				<motion.div
					className="h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto w-24 rounded-full"
					initial={{ width: 0 }}
					whileInView={{ width: '6rem' }}
					transition={{ delay: 0.3, duration: 0.6 }}
					viewport={{ once: true }}
				/>
			</motion.div>

			{/* Grid: 1 col on mobile, 2 on md, 3 on lg */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{cards.map((card, i) => (
					<motion.div
						key={card.title}
						className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-red-600 hover:border-red-500 transform hover:-translate-y-1"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: i * 0.1 }}
						viewport={{ once: true }}
					>
						<button
							className="w-full flex items-center justify-between group"
							onClick={() => toggle(i)}
						>
							<div className="flex items-center gap-3">
								<div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
									<card.icon className="w-6 h-6 text-red-600" />
								</div>
								<span className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors">
									{card.title}
								</span>
							</div>
							<motion.span
								className="text-red-600 font-bold text-xl bg-red-100 w-8 h-8 rounded-full flex items-center justify-center"
								animate={{ rotate: openIndex === i ? 45 : 0 }}
								transition={{ duration: 0.2 }}
							>
								+
							</motion.span>
						</button>

						<AnimatePresence initial={false}>
							{openIndex === i && (
								<motion.div
									className="overflow-hidden mt-4 text-gray-700 text-base leading-relaxed"
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3 }}
								>
									<div className="pt-4 border-t border-gray-100">
										{Array.isArray(card.content) ? (
											<ul className="list-none space-y-2">
												{card.content.map((val, idx) => (
													<li key={idx} className="flex items-start gap-2">
														<span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
														<span className="font-medium">{val}</span>
													</li>
												))}
											</ul>
										) : (
											<p className="leading-relaxed font-medium">
												{card.content}
											</p>
										)}
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Mission;
