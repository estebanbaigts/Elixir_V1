import React from 'react';
import { MessageSquare } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-32 bg-gradient-to-b from-black/40 to-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Prêt à lancer votre <span className="gradient-text">projet</span> ?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Contactez-nous dès aujourd'hui pour transformer votre vision en réalité.
        </p>
        <button className="bg-primary hover:bg-primary-dark px-8 py-4 rounded-full transition-all transform hover:scale-105 flex items-center gap-2 mx-auto">
          Commencer la discussion
          <MessageSquare className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}