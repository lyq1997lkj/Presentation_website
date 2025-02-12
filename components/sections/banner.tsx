"use client";

import { motion } from 'framer-motion';
import { ParticleCanvas } from '../particle-canvas';

export function Banner() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleCanvas />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            The Evolution of AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Exploring the past, present, and future of artificial intelligence through an
            interactive journey.
          </p>
          <motion.a
            href="#timeline"
            className="inline-block gradient-bg text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start the Journey
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}