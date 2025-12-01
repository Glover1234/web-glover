import React from 'react';
import { motion } from 'framer-motion';

const impacts = [
	{
		title: 'Reducción de Emisiones',
		description:
			'Optimización de procesos y uso de energías limpias para minimizar nuestra huella de carbono.',
	},
	{
		title: 'Reforestación Continua',
		description:
			'Colaboramos con comunidades locales para reforestar áreas afectadas y proteger la biodiversidad.',
	},
	{
		title: 'Valorización de Residuos',
		description:
			'Reciclamos y reutilizamos subproductos de aserrío y pulido reduciendo el desperdicio.',
	},
];

const Impact: React.FC = () => (
	<section className="py-20 bg-white">
		<div className="container mx-auto px-4 text-center">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="text-4xl font-bold mb-8"
			>
				Nuestro Impacto Ambiental
			</motion.h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
				{impacts.map((imp, i) => (
					<motion.div
						key={imp.title}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: i * 0.1 }}
						className="bg-gray-100 p-6 sm:p-8 rounded-lg mx-auto w-full"
					>
						<h3 className="text-xl sm:text-2xl font-bold mb-2">
							{imp.title}
						</h3>
						<p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
							{imp.description}
						</p>
					</motion.div>
				))}
			</div>
		</div>
	</section>
);

export default Impact;
