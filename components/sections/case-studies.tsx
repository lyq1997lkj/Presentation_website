"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Notebook as Robot, Microscope } from 'lucide-react';

const cases = [
  {
    icon: Brain,
    title: "Healthcare Diagnostics",
    description: "AI-powered medical imaging analysis achieving 95% accuracy in early disease detection.",
    impact: "Reduced diagnosis time by 60% and improved patient outcomes."
  },
  {
    icon: Robot,
    title: "Autonomous Vehicles",
    description: "Self-driving technology processing 1TB of sensor data per hour for safe navigation.",
    impact: "Decreased accident rates by 40% in pilot programs."
  },
  {
    icon: Microscope,
    title: "Scientific Research",
    description: "AI accelerating drug discovery by analyzing millions of molecular combinations.",
    impact: "Reduced research timeline from years to months."
  }
];

export function CaseStudies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="cases" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Case Studies
        </motion.h2>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              className="card-3d bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="p-6">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="text-sm font-semibold text-blue-500">Impact:</p>
                  <p className="text-gray-600 dark:text-gray-300">{item.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}