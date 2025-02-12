"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Zap, Globe, Cpu } from 'lucide-react';

const predictions = [
  {
    icon: Sparkles,
    title: "AGI Development",
    timeframe: "2030-2040",
    description: "Artificial General Intelligence reaching human-level cognition across multiple domains.",
    impact: "Revolutionary changes in problem-solving and innovation capabilities."
  },
  {
    icon: Zap,
    title: "Quantum AI",
    timeframe: "2025-2030",
    description: "Integration of quantum computing with AI algorithms.",
    impact: "Exponential increase in processing power and optimization capabilities."
  },
  {
    icon: Globe,
    title: "Global AI Infrastructure",
    timeframe: "2025-2035",
    description: "Worldwide AI-powered systems for climate, healthcare, and education.",
    impact: "Improved global coordination and resource distribution."
  },
  {
    icon: Cpu,
    title: "Neural Interfaces",
    timeframe: "2030-2040",
    description: "Direct brain-computer interfaces for AI interaction.",
    impact: "Revolutionary changes in human-AI collaboration and communication."
  }
];

export function Future() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="future" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Future of AI
        </motion.h2>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {predictions.map((prediction, index) => (
            <motion.div
              key={prediction.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                  <prediction.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{prediction.title}</h3>
                  <p className="text-sm font-semibold text-blue-500 mb-2">
                    Expected: {prediction.timeframe}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {prediction.description}
                  </p>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                    <p className="text-sm font-semibold text-blue-500">Potential Impact:</p>
                    <p className="text-gray-600 dark:text-gray-300">{prediction.impact}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}