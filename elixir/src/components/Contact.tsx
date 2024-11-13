import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formState);
  };

  return (
    <section id="contact" className="py-32 ">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Contactez <span className="gradient-text">Nous</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Parlons de votre projet</h3>
            <p className="text-gray-400 mb-8">
              Nous sommes là pour transformer vos idées en réalité numérique. 
              Contactez-nous pour discuter de votre projet.
            </p>

            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-400">contact@elixyr.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Téléphone</h4>
                  <p className="text-gray-400">+33 1 23 45 67 89</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Adresse</h4>
                  <p className="text-gray-400">Paris, France</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                required
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Envoyer le message
              <Send className="h-5 w-5" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}