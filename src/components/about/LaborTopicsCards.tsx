import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Users, Award, Leaf, DollarSign } from 'lucide-react';

const cards = [
	{
		icon: Briefcase,
		title: 'Jornada laboral de 40 horas',
		content:
			'Respetamos y promovemos una jornada laboral de 40 horas semanales, buscando siempre el equilibrio óptimo entre la productividad y la calidad de vida de quienes forman parte de Industrial Glover.',
	},
	{
		icon: Users,
		title: 'Inclusión laboral',
		content:
			'Nos comprometemos con la diversidad y la inclusión, creando oportunidades laborales para personas de distintos perfiles y condiciones. Estamos convencidos de que un equipo diverso enriquece nuestra cultura y potencia la innovación.',
	},
	{
		icon: Award,
		title: 'Great Place to Work',
		content:
			'Trabajamos para ser reconocidos como un "Great Place to Work", brindando un ambiente laboral seguro, colaborativo y motivador que inspira a cada integrante a dar lo mejor de sí.',
	},
	{
		icon: Leaf,
		title: 'Compromiso con energías limpias',
		content:
			'Industrial Glover impulsa prácticas sostenibles y el uso de energías limpias en sus procesos productivos, contribuyendo activamente al cuidado del medio ambiente y a un futuro más sustentable.',
	},
	{
		icon: DollarSign,
		title: 'Rentas mínimas competitivas',
		content:
			'Valoramos el esfuerzo y dedicación de nuestro equipo con rentas mínimas desde 22 UF, garantizando una remuneración justa y competitiva acorde al mercado regional y al compromiso de nuestros colaboradores.',
	},
];

const LaborTopicsCards: React.FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

	return (
		<div className="container mx-auto px-4 mb-16">
			<motion.div
				className="text-center mb-8 py-8"
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
			>
				<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-4 text-red-600 tracking-wide">
                Nuestro Compromiso Laboral
				</h2>
				<motion.div
					className="h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto w-24 rounded-full"
					initial={{ width: 0 }}
					whileInView={{ width: '6rem' }}
					transition={{ delay: 0.3, duration: 0.6 }}
					viewport={{ once: true }}
				/>
			</motion.div>
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
										<p className="leading-relaxed font-medium">
											{card.content}
										</p>
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

export default LaborTopicsCards;
