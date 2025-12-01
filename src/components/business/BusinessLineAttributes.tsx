import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface Feature {
  title: string;
  content: string;
}

interface BusinessLineAttributesProps {
  businessLine: 'doors' | 'furniture' | 'wood' | 'structures' | 'complements';
}

// Exporting the businessLineFeatures object so it can be imported by other components
export const businessLineFeatures = {
  doors: [
    { 
      title: 'AISLACIÓN DE TEMPERATURAS Y RUIDOS. PUERTAS PDA.', 
      content: 'Con 4,5 cms. de espesor de madera sólida, que proporcionan una excelente barrera de aislación térmica y acústica entre el exterior e interior de tu casa. (Con informes de ensayos CITEC UBB) PUERTAS PDA, PROTECCIÓN DEL AMBIENTE. Con ensayos de laboratorio que acreditan la aislación térmica y de ruidos.' 
    },
    { 
      title: 'MADERA ESTABLE Y DURABLE EN EL TIEMPO', 
      content: 'Madera Sólida de Pino Radiata, con Secado lento de 4 a 5 días y a temperaturas entre 65°C a 70°C en cámara, obteniendo a una humedad entre 8% a 12%, lo que permite a una madera natural comportarse de manera estable en el tiempo.' 
    },
    { 
      title: 'PINTURA QUE PROTEGE CONTRA LA HUMEDAD Y DE LA LUZ. SUAVE AL TACTO.', 
      content: 'Puerta con pinturas y lacas italianas en base al agua, con secado UV y acabados de alta calidad, que lo protege contra la humedad, entregando una superficie suave al tacto y muy resistente a una exposición moderada a la luz solar.' 
    },
    { 
      title: 'CERTIFICACIÓN FSC - MANEJO SOSTENIBLE DE BOSQUES', 
      content: 'Maderas Fabricadas con Certificación FSC, que cumplen con los más altos estándares sociales y ambientales del mercado, con un manejo sostenible de los bosques.' 
    }
  ],
  furniture: [
    { title: 'ESPECIALISTA EN DISEÑOS CLÁSICOS Y MODERNOS.', content: 'En nuestra empresa fabricamos muebles de alto diseño que combinan elegancia, ergonomía y funcionalidad. Cada pieza está pensada para brindar comodidad y calidez, con materiales de alta calidad. Creamos ambientes donde el diseño se vive, se siente y se disfruta.' },
    { 
      title: 'MADERA ESTABLE Y DURABLE EN EL TIEMPO', 
      content: 'Madera Sólida de Pino Radiata, con Secado lento de 4 a 5 días y a temperaturas entre 65°C a 70°C en cámara, obteniendo a una humedad entre 8% a 12%, lo que permite a una madera natural comportarse de manera estable en el tiempo.' 
    },
    { 
      title: 'PINTURA QUE PROTEGE CONTRA LA HUMEDAD Y DE LA LUZ. SUAVE AL TACTO.', 
      content: 'Puerta con pinturas y lacas italianas en base al agua, con secado UV y acabados de alta calidad, que lo protege contra la humedad, entregando una superficie suave al tacto y muy resistente a una exposición moderada a la luz solar.' 
    },
    { 
      title: 'CERTIFICACIÓN FSC - MANEJO SOSTENIBLE DE BOSQUES', 
      content: 'Maderas Fabricadas con Certificación FSC, que cumplen con los más altos estándares sociales y ambientales del mercado, con un manejo sostenible de los bosques.' 
    }
  ],
  wood: [
    { title: 'MADERA DE EXPORTACIÓN PREMIUM', content: 'Nos especializamos en la fabricación y exportación de productos de madera elaborados a partir de pino radiata de alta calidad. Seleccionamos cuidadosamente la materia prima para asegurar durabilidad, rendimiento y versatilidad. Nuestra madera se adapta a múltiples industrias como muebles, construcción y carpintería. Utilizamos tecnología de punta en nuestros procesos para lograr acabados superiores y estabilidad dimensional. Cada etapa de producción cuenta con un estricto control de calidad. La combinación de buena materia prima y tecnología nos hace competitivos a nivel internacional. Cumplimos con altos estándares de sostenibilidad ambiental y eficiencia en nuestras exportaciones. Ofrecemos un producto confiable y con valor agregado para clientes en todo el mundo.' },
    { title: 'MADERA ESTABLE Y DURABLE EN EL TIEMPO', content: 'Madera Sólida de Pino Radiata, con Secado lento de 4 a 5 días y a temperaturas entre 65°C a 70°C en cámara, obteniendo a una humedad entre 8% a 12%, lo que permite a una madera natural comportarse de manera estable en el tiempo. Estructuradas con procesos de Finger Joint.' },
    { title: 'ALTA CAPACIDAD PRODUCTIVA Y LOGÍSTICA GLOBAL', content: 'Contamos con una alta capacidad productiva de madera de exportación de pino radiata, respaldada por procesos tecnificados que garantizan eficiencia, calidad y sostenibilidad en cada etapa de la producción. Nuestra operación se apoya en mano de obra especializada, lo que nos permite cumplir con los más altos estándares internacionales y responder de manera oportuna a las demandas del mercado global.' },
    { title: 'CERTIFICACIÓN FSC - MANEJO SOSTENIBLE DE BOSQUES', content: 'Maderas Fabricadas con Certificación FSC, que cumplen con los más altos estándares sociales y ambientales del mercado, con un manejo sostenible de los bosques.' }
  ],
  structures: [
    { title: 'ESTRUCTURAS PARA MUEBLES RESISTENTES Y DURABLES', content: 'Fabricamos estructuras de madera de alta calidad para muebles, tales como sofás, respaldos de cama y bases para camas. Nuestras piezas se distinguen por ser resistentes y duraderas, ideales para garantizar la estabilidad y el confort en el uso diario. Empleamos tecnología finger joint, lo que permite una mejor unión de las piezas de madera, con adhesivos altamente resistentes al agua, humedad y cambios de temperatura; para condiciones ambientales exigentes; genera una unión fuerte y duradera. Todo esto permite de manera óptima el aprovechamiento del material y aumentando la resistencia estructural. Gracias a nuestros procesos precisos y controlados, ofrecemos soluciones confiables para la industria del mueble.' },
    { title: 'VERSATILIDAD', content: 'Nuestras estructuras de madera son diseñadas y armadas cuidadosamente según las especificaciones de cada línea de producto y los requerimientos de los procesos de ensamble. Este enfoque nos permite garantizar una adaptación precisa a cada modelo de mueble, optimizando tanto la funcionalidad como la resistencia. Además, una de sus principales ventajas es que estas estructuras pueden ser desarmadas con facilidad, lo que facilita su almacenamiento o transporte en caso de ser necesario, sin comprometer la integridad ni la durabilidad del producto.' },
    { title: 'MADERA ESTABLE EN EL TIEMPO', content: 'Madera Sólida de Pino Radiata, con Secado lento de 4 a 5 días y a temperaturas entre 65°C a 70°C en cámara, obteniendo a una humedad entre 8% a 12%, lo que permite a una madera natural comportarse de manera estable en el tiempo.' },
    { title: 'CERTIFICACIÓN FSC - MANEJO SOSTENIBLE DE BOSQUES', content: 'Maderas Fabricadas con Certificación FSC, que cumplen con los más altos estándares sociales y ambientales del mercado, con un manejo sostenible de los bosques.' }
  ],
  complements: [
    { title: 'PATAS PARA MUEBLES Y CAMAS CON VARIADOS DISEÑOS', content: 'También fabricamos patas de madera para camas y diversos tipos de muebles como veladores, cómodas, sillones y más. Contamos con una amplia variedad de diseños y estilos, adaptables a diferentes líneas estéticas y funcionales. Ofrecemos opciones en distintos colores y acabados, lo que permite personalizar cada pieza según las necesidades del cliente. Estas patas se elaboran con materiales de alta calidad, garantizando resistencia y durabilidad.' },
    { title: 'PINTURA QUE PROTEGE CONTRA LA HUMEDAD Y DE LA LUZ. SUAVE AL TACTO.', content: 'Puerta con pinturas y lacas italianas en base al agua, con secado UV y acabados de alta calidad, que lo protege contra la humedad, entregando una superficie suave al tacto y muy resistente a una exposición moderada a la luz solar.' },
    { title: 'MADERA ESTABLE Y DURABLE EN EL TIEMPO', content: 'Madera Sólida de Pino Radiata, con Secado lento de 4 a 5 días y a temperaturas entre 65°C a 70°C en cámara, obteniendo a una humedad entre 8% a 12%, lo que permite a una madera natural comportarse de manera estable en el tiempo.' },
    { title: 'CERTIFICACIÓN FSC - MANEJO SOSTENIBLE DE BOSQUES', content: 'Maderas Fabricadas con Certificación FSC, que cumplen con los más altos estándares sociales y ambientales del mercado, con un manejo sostenible de los bosques.' }
  ]
};

const BusinessLineAttributes: React.FC<BusinessLineAttributesProps> = ({ businessLine }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const features = businessLineFeatures[businessLine];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-neutral-200 last:border-b-0"
            >
              <button
                onClick={() => setOpenSection(openSection === feature.title ? null : feature.title)}
                className="w-full flex items-center justify-between text-left py-6 group"
              >
                <span className="text-lg font-light uppercase text-neutral-900 group-hover:text-red-600 transition-colors tracking-wider">
                  {feature.title}
                </span>
                <Plus
                  className={`w-5 h-5 transition-all duration-300 ${
                    openSection === feature.title ? 'rotate-45 text-red-600' : 'group-hover:text-red-600'
                  }`}
                />
              </button>
              <AnimatePresence>
                {openSection === feature.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-neutral-600 pb-6 leading-relaxed">
                      {feature.content}
                    </p>
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

export default BusinessLineAttributes;