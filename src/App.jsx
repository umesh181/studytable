// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Header />
      <main>
        <Hero />
        <Features />
        
        <section className="bg-gray-900 text-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">How we come to this?</h2>
              <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8">
                We observed and researched for three years in a variety of student. Where the best needs more attention to do better and the student struggling needs more attention to improve their own abilities. All students need personal attention. Based on the notion of "Personal attention" we have built our algorithm and AI tutor to cater each children uniquely...
              </p>
              
              <a href="/#" className="underline underline-offset-2">
  Read the full story →
</a>
             
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Crafted for your all academic needs</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 md:px-8 py-2 md:py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors text-sm md:text-base"
          >
            Get your Entry
          </motion.button>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;