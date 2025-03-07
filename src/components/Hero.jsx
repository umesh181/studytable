// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 py-8 md:py-16 space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 md:items-center"
    >
      <div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-4 md:mb-6"
        >
          <span>Optimize </span>
          <span className="text-gray-500">Your Performance For </span>
          <br className="hidden md:block" />
          <span>JEE, NEET, </span>
          <span>and </span>
          <span className="text-black">Boards</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base text-gray-600 mb-6 md:mb-8"
        >
          Your personal AI-Tutor for all academic needs. Whether its school exam, boards or competitive exams we plan, manage, and help you clear your doubts instantly. For students of class 10th, 11th and 12th (CBSE) and preparing for all medical or engineering entrance exams
        </motion.p>
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 md:px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors text-sm md:text-base"
          >
            Apply for admission
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 md:px-6 py-2 text-gray-700 hover:text-black transition-colors text-sm md:text-base"
          >
            Sign in →
          </motion.button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="relative mt-8 md:mt-0"
      >
        <img 
          src="Frame 52 (2).png" 
          alt="Students studying"
          
        />
      </motion.div>
    </motion.section>
  );
}