import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronDown } from 'lucide-react';

const advantages = [
	{
		title: 'Producción integrada',
		description:
			'Desde el abastecimiento de trozos de madera y aserradero hasta la pintura y el acabado final.',
		details:
			'Nuestro proceso de producción integrado garantiza un control total de la calidad en cada etapa, desde la selección de la materia prima hasta el producto final. Contamos con gestión forestal responsable certificada por FSC® (Forest Stewardship Council®), que garantiza que la madera proviene de bosques gestionados de forma ambientalmente adecuada, socialmente beneficiosa y económicamente viable. Nuestro proceso incluye secado lento de 4 a 5 días a temperaturas entre 65°C a 70°C en cámara, obteniendo una humedad entre 8% a 12%, lo que permite que la madera natural se comporte de manera estable en el tiempo.',
	},
	{
		title: 'Tecnología de última generación',
		description:
			'Implementamos procesos automatizados y avanzados para garantizar calidad y eficiencia.',
		details:
			'Contamos con maquinaria de última generación incluyendo tecnología CNC o Control Numérico por Computadora para realizar cortes, perforaciones y fresados con alta precisión y repetitividad, scanner, encuadradora doble, y sistemas de pintado automatizado y ecológico. Desde 2017, implementamos tintas, sellos y lacas en base a agua en el 90% de nuestros productos y 100% en la línea de muebles y patas. Esta tecnología incluye secado con aire caliente, lámparas IR y UV, eliminando riesgos de inflamabilidad y reduciendo la exposición a sustancias peligrosas.',
	},
	{
		title: 'Alta capacidad productiva',
		description:
			'Nuestra infraestructura logística y tecnológica nos permite expandir operaciones según demanda.',
		details:
			'Contamos con una alta capacidad productiva de madera de exportación de pino radiata, respaldada por procesos tecnificados que garantizan eficiencia, calidad y sostenibilidad. Nuestra operación se apoya en mano de obra especializada y utiliza tecnología finger joint para optimizar el aprovechamiento del material y aumentar la resistencia estructural. Empleamos adhesivos altamente resistentes al agua, humedad y cambios de temperatura, generando uniones fuertes y duraderas que nos permiten responder oportunamente a las demandas del mercado global.',
	},
	{
		title: 'Liderazgo en el mercado',
		description:
			'Somos el proveedor clave de muebles de madera sólida para Rosen y otros clientes estratégicos.',
		details:
			'Nuestra posición de liderazgo se basa en la fabricación de muebles de alto diseño que combinan elegancia, ergonomía y funcionalidad. Nos especializamos en estructuras de madera para sofás, respaldos de cama, bases para camas, patas de madera y diversos tipos de muebles como veladores, cómodas y sillones. Ofrecemos una amplia variedad de diseños, estilos y acabados personalizables, adaptables a diferentes líneas estéticas. Nuestras estructuras pueden ser desarmadas con facilidad para facilitar almacenamiento y transporte sin comprometer la integridad del producto.',
	},
	{
		title: 'Sostenibilidad y compromiso social',
		description:
			'Nos enfocamos en un desarrollo armónico que equilibre crecimiento económico, inclusión social y protección ambiental.',
		details:
			'Asumimos un compromiso firme con la sostenibilidad a través de nuestra gestión forestal responsable certificada FSC®. Desde 2017, utilizamos pinturas en base a agua que reducen emisiones contaminantes, menor huella de carbono y residuos más seguros. Nuestras pinturas en base a agua mejoran la seguridad para la salud al reducir la exposición a compuestos peligrosos, contribuyen a disminuir la contaminación del aire y ofrecen mayor durabilidad y resistencia a la decoloración.',
	},
];

const CompetitiveAdvantages: React.FC = () => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			className="mb-20 pt-16"
		>
			<h2 className="text-3xl font-bold text-center mb-2">
				VENTAJAS COMPETITIVAS
			</h2>
			<div className="w-24 h-0.5 bg-red-600 mx-auto mb-12"></div>

			<div className="space-y-4">
				{advantages.map((advantage, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: index * 0.1 }}
						className="bg-white rounded-lg shadow-lg overflow-hidden"
					>
						<motion.button
							whileHover={{ scale: 1.01 }}
							onClick={() =>
								setExpandedIndex(
									expandedIndex === index ? null : index
								)
							}
							className="w-full p-6 flex items-center justify-between text-left group"
						>
							<div className="flex items-center gap-4">
								<CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
								<span className="font-semibold text-lg text-neutral-900 group-hover:text-red-600 transition-colors">
									{advantage.title}
								</span>
							</div>
							<ChevronDown
								className={`w-6 h-6 text-neutral-400 transition-transform duration-300 ${
									expandedIndex === index ? 'rotate-180' : ''
								}`}
							/>
						</motion.button>

						<AnimatePresence>
							{expandedIndex === index && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3 }}
									className="px-16 pb-6"
								>
									<p className="text-neutral-600 mb-4">
										{advantage.description}
									</p>
									<p className="text-neutral-500">
										{advantage.details}
									</p>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

export default CompetitiveAdvantages;
