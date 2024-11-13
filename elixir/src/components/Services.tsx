import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Smartphone, Globe, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Sites Web Premium",
    description: "Des sites web modernes et performants qui captiveront vos visiteurs.",
    features: ["Design responsive", "SEO optimisé", "Performance maximale"]
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Applications Web",
    description: "Des applications web réactives et intuitives pour tous vos besoins.",
    features: ["Interface intuitive", "Temps réel", "Progressive Web App"]
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Développement Sur Mesure",
    description: "Des solutions personnalisées pour répondre à vos exigences spécifiques.",
    features: ["Architecture scalable", "API robuste", "Sécurité renforcée"]
  }
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-black/40 to-dark"></div>
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nos <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services numériques conçus pour propulser votre entreprise vers l'avenir.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white/5 rounded-2xl p-8 hover:bg-primary/5 transition-colors duration-300"
            >
              <div className="absolute top-4 right-4">
                <ArrowUpRight className="h-6 w-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="bg-primary/10 p-4 rounded-xl w-fit mb-6 text-primary">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}