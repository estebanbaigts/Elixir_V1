import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Luxe",
    description: "Plateforme e-commerce haut de gamme avec animations 3D",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
    tags: ["React", "Three.js", "Stripe"],
    link: "#",
    github: "#"
  },
  {
    title: "Application SaaS",
    description: "Dashboard analytics avec visualisations de données",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["Next.js", "TailwindCSS", "D3.js"],
    link: "#",
    github: "#"
  },
  {
    title: "Application Mobile",
    description: "Application de fitness avec suivi en temps réel",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#",
    github: "#"
  }
];

export function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="portfolio" className="py-32 bg-gradient-to-b from-black/40 to-dark">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Notre <span className="gradient-text">Portfolio</span>
        </motion.h2>
        
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.link}
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Voir le projet
                  </a>
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Code source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}