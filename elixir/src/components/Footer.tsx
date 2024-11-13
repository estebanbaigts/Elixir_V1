import React from 'react';
import { Boxes } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Boxes className="text-primary h-6 w-6" />
            <span className="font-bold">Elixyr</span>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 Elixyr. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}