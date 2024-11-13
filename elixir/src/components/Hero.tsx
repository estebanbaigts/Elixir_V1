import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, Zap } from 'lucide-react';

export function Hero() {
  return (
    <header className="min-h-screen relative overflow-hidden flex items-center">
      <div className="container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              Innovation Digitale
            </motion.div>
            
            <motion.h1 
              className="text-6xl lg:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Créez votre
              <span className="block gradient-text">avenir numérique</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-400 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Transformez vos idées en expériences numériques exceptionnelles avec notre expertise en développement web innovant.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary px-8 py-4 rounded-xl font-medium flex items-center gap-2 hover:bg-primary-dark transition-colors"
              >
                Démarrer un projet
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/10 px-8 py-4 rounded-xl font-medium flex items-center gap-2 hover:bg-white/5 transition-colors"
              >
                Explorer nos services
                <Code2 className="h-5 w-5" />
              </motion.button>
            </motion.div>

            <motion.div 
              className="mt-12 grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {[
                { label: "Projets", value: "10+" },
                { label: "Clients", value: "10+" },
                { label: "Expérience", value: "5 ans" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-10 bg-gradient-to-br from-primary to-violet-500 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap className="w-32 h-32 text-white" />
              </div>
            </div>

            <motion.div
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 rounded-full border border-white/10"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}