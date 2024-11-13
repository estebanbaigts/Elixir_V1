import React from 'react';
import { Star, Coffee, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: <Star className="h-6 w-6 text-primary" />,
    title: "Excellence technique",
    description: "Nous utilisons les dernières technologies pour créer des solutions performantes."
  },
  {
    icon: <Coffee className="h-6 w-6 text-primary" />,
    title: "Accompagnement personnalisé",
    description: "Une équipe dédiée à votre projet du début à la fin."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    title: "Support réactif",
    description: "Une assistance continue pour garantir votre satisfaction."
  }
];

export function Features() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Pourquoi choisir <span className="gradient-text">Elixyr</span> ?
            </h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className=" p-3 rounded-lg h-fit">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Team working"
              className="rounded-2xl shadow-2xl shadow-purple-500/20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}