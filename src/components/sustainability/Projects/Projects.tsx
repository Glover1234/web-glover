import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
	{
		title: 'Gestión Forestal Responsable',
		description:
			'En nuestra empresa asumimos un compromiso firme con la sostenibilidad, trabajando con responsabilidad a través de una gestión forestal responsable y certificada por la FSC® (Forest Stewardship Council®). Esta certificación garantiza que la madera utilizada proviene de bosques gestionados de forma ambientalmente adecuada, socialmente beneficiosa y económicamente viable. De esta manera, contribuimos activamente a la conservación de los recursos naturales y al desarrollo de una industria forestal sostenible.',
	},
	{
		title: 'Tecnología',
		description:
			'En nuestra empresa trabajamos con tecnología avanzada y maquinaria de última generación que permite optimizar los procesos industriales, haciendo un uso eficiente de los recursos y minimizando el desperdicio de materiales. Nos enfocamos en la sostenibilidad, por lo que reprocesamos los residuos generados durante la producción, dándoles una nueva vida útil cuando es posible. Además, los residuos que no pueden ser reutilizados son descartados de manera responsable, cumpliendo estrictamente con las normas ambientales establecidas, reafirmando así nuestro compromiso con el cuidado del medio ambiente.',
	},
	{
		title: 'Pinturas al Agua Amigables con las Personas y el Medio Ambiente',
		description:
			'Uno de los principales desafíos en la industria manufacturera es eliminar el uso de solventes por su impacto ambiental y riesgos para la salud. Desde 2017, la Planta Glover implementó tintas, sellos y lacas en base a agua en el 90% de sus productos, y en el 100% de la línea de muebles y patas para camas y sofás. Este cambio mejoró el proceso de pintura, eliminando riesgos de inflamabilidad, reduciendo la toxicidad y la exposición de los trabajadores a sustancias peligrosas. El sistema incluye secado con aire caliente, lámparas IR y UV, lo que aumenta la durabilidad de las tintas. Entre los beneficios destacan la reducción de emisiones contaminantes, menor huella de carbono, y residuos más seguros y fáciles de tratar.',
	},
];

const Projects: React.FC = () => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	const toggleExpanded = (index: number) => {
		setExpandedIndex(expandedIndex === index ? null : index);
	};

	return (
		<section className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-4xl font-bold text-center mb-8"
				>
					Nuestros Procesos Sustentables
				</motion.h2>
				<div className="max-w-4xl mx-auto space-y-4">
					{projects.map((proj, i) => (
						<motion.div
							key={proj.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.1 }}
							className="bg-white rounded-lg shadow overflow-hidden"
						>
							<button
								onClick={() => toggleExpanded(i)}
								className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
							>
								<h3 className="text-xl font-semibold">{proj.title}</h3>
								<motion.div
									animate={{ rotate: expandedIndex === i ? 180 : 0 }}
									transition={{ duration: 0.2 }}
									className="w-5 h-5 flex items-center justify-center"
								>
									<svg
										className="w-4 h-4 text-gray-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</motion.div>
							</button>
							<AnimatePresence>
								{expandedIndex === i && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3 }}
										className="overflow-hidden"
									>
										<div className="px-6 pb-4">
											<p className="text-neutral-700 leading-relaxed">
												{proj.description}
											</p>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
