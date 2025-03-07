// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative py-4 px-4 md:py-6 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2"
        >
          
          <h3 className="text-[2rem] tracking-wide mb-2">
  <span className="font-medium text-[#191919]">STUDY</span>
  <span className="font-bold text-[#191919]">table</span>
</h3>

        </motion.div>

        
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>

        
        <nav className="hidden md:flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Apply for admission
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 text-gray-700 hover:text-black transition-colors"
          >
            Sign in →
          </motion.button>
        </nav>

        
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              <button className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                Apply for admission
              </button>
              <button className="w-full py-2 text-gray-700 hover:text-black transition-colors">
                Sign in →
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}