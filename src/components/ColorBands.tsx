import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const bands = [
  {
    bgColor: 'bg-[#4A90E2]',
    textColor: 'text-white',
    content: "Prenez rendez-vous dès aujourd'hui pour un accompagnement personnalisé",
    buttonText: 'Contactez-moi',
    buttonLink: '/contact',
    buttonStyle: 'bg-white text-[#4A90E2] hover:bg-white/90',
  },
  {
    bgColor: 'bg-[#A1D6C2]',
    textColor: 'text-[#2D2D2D]',
    content: "Spécialiste en TDAH, HPI et troubles de l'apprentissage",
    buttonText: 'En savoir plus',
    buttonLink: '/services',
    buttonStyle: 'bg-[#2D2D2D] text-white hover:bg-[#2D2D2D]/90',
  },
  {
    bgColor: 'bg-[#F5F5F5]',
    textColor: 'text-[#2D2D2D]',
    content: 'Localisée à Colmar, au cœur du Haut-Rhin',
    buttonText: 'Nous trouver',
    buttonLink: '/contact',
    buttonStyle: 'bg-[#4A90E2] text-white hover:bg-[#4A90E2]/90',
  },
];

export default function ColorBands() {
  return (
    <div className="space-y-0">
      {bands.map((band, index) => {
        const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.2,
        });

        return (
          <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`${band.bgColor} py-16`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <h2 className={`text-2xl md:text-3xl font-bold font-lora ${band.textColor} text-center md:text-left`}>
                  {band.content}
                </h2>
                <Link
                  to={band.buttonLink}
                  className={`${band.buttonStyle} px-8 py-3 rounded-lg transition-all duration-200 font-semibold flex items-center gap-2 hover:scale-105 shadow-lg hover:shadow-xl`}
                >
                  <span>{band.buttonText}</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}