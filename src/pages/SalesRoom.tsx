import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ContactCTA from '../components/home/ContactCTA';
import salesroomBanner from '../assets/salesroom/salesroom5.jpeg';
import salesroom2 from '../assets/salesroom/salesroom2.jpeg';
import salesroom3 from '../assets/salesroom/salesroom3.jpeg';
import salesroom4 from '../assets/salesroom/salesroom4.jpeg';
import salesroom5 from '../assets/salesroom/salesroom5.jpeg';

const salesroomImages = [salesroom3, salesroom4, salesroom5];

const locations = [
	{
		name: 'Sala de Ventas Principal',
		address: 'Kilómetro 655, Pillanlelbún',
		phone: '+56 45 2 967500',
		email: 'contacto@glover.com',
		schedule: 'Lunes a Viernes: 9:00 - 16:30',
		image: salesroom3,
	},
];

const SalesRoom: React.FC = () => {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 500], [0, 150]);
	const [isCarouselOpen, setIsCarouselOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const openCarousel = (index: number = 0) => {
		setCurrentImageIndex(index);
		setIsCarouselOpen(true);
	};

	const closeCarousel = () => {
		setIsCarouselOpen(false);
	};

	const nextImage = () => {
		setCurrentImageIndex((prev) => (prev + 1) % salesroomImages.length);
	};

	const prevImage = () => {
		setCurrentImageIndex((prev) => (prev - 1 + salesroomImages.length) % salesroomImages.length);
	};

	return (
		<div>
			{/* Hero Section */}
			<div className="relative h-[75vh] overflow-hidden pt-20">
				<motion.div style={{ y }} className="absolute inset-0">
					<img
						src={salesroomBanner}
						alt="Sala de Ventas"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black/60" />
				</motion.div>

				<div className="relative h-full flex items-center">
					<div className="container">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="text-center max-w-4xl mx-auto"
						>
							<h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
								SALA DE VENTAS
							</h1>
							<div className="w-24 h-0.5 bg-red-600 mx-auto mb-8"></div>
							<p className="text-xl text-white/90">
								Visita nuestras salas de venta y conoce nuestros productos
							</p>
						</motion.div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
					className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
				>
					<div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
						<motion.div
							animate={{
								y: [0, 12, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: 'reverse',
							}}
							className="w-1 h-3 bg-white rounded-full"
						/>
					</div>
				</motion.div>
			</div>

			{/* Locations Section */}
			<section className="py-20">
				<div className="container">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						{locations.map((location, index) => (
							<motion.div
								key={location.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
								className="bg-white rounded-lg shadow-lg overflow-hidden"
							>
								<div 
									className="aspect-video overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
									onClick={() => openCarousel(1)}
								>
									<img
										src={location.image}
										alt={location.name}
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-8">
									<h2 className="text-2xl font-bold mb-6">
										{location.name}
									</h2>
									<div className="space-y-4">
										<div className="flex items-start gap-4">
											<MapPin className="w-6 h-6 text-red-600" />
											<span className="text-neutral-600">
												{location.address}
											</span>
										</div>
										<div className="flex items-start gap-4">
											<Phone className="w-6 h-6 text-red-600" />
											<span className="text-neutral-600">
												{location.phone}
											</span>
										</div>
										<div className="flex items-start gap-4">
											<Mail className="w-6 h-6 text-red-600" />
											<span className="text-neutral-600">
												{location.email}
											</span>
										</div>
										<div className="flex items-start gap-4">
											<Clock className="w-6 h-6 text-red-600" />
											<span className="text-neutral-600">
												{location.schedule}
											</span>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Carousel Modal */}
			<AnimatePresence>
				{isCarouselOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
						onClick={closeCarousel}
					>
						<motion.div
							initial={{ scale: 0.8 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.8 }}
							className="relative max-w-4xl max-h-[80vh] w-full mx-4"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Close button */}
							<button
								onClick={closeCarousel}
								className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
							>
								<X className="w-6 h-6 text-white" />
							</button>

							{/* Navigation buttons */}
							<button
								onClick={prevImage}
								className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
							>
								<ChevronLeft className="w-6 h-6 text-white" />
							</button>
							<button
								onClick={nextImage}
								className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
							>
								<ChevronRight className="w-6 h-6 text-white" />
							</button>

							{/* Image */}
							<motion.img
								key={currentImageIndex}
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -100 }}
								src={salesroomImages[currentImageIndex]}
								alt={`Sala de ventas ${currentImageIndex + 1}`}
								className="w-full h-full object-contain rounded-lg"
							/>

							{/* Image counter */}
							<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
								<span className="text-white text-sm">
									{currentImageIndex + 1} / {salesroomImages.length}
								</span>
							</div>

							{/* Thumbnail navigation */}
							<div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
								{salesroomImages.map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentImageIndex(index)}
										className={`w-3 h-3 rounded-full transition-colors ${
											index === currentImageIndex 
												? 'bg-white' 
												: 'bg-white/40 hover:bg-white/60'
										}`}
									/>
								))}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Contact CTA Section */}
			<ContactCTA />
		</div>
	);
};

export default SalesRoom;