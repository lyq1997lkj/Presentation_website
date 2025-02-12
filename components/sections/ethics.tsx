"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Users, Brain, Lock } from 'lucide-react';

const ethicsTopics = [
  {
    icon: Shield,
    title: "Bias and Fairness",
    challenge: "Ensuring AI systems treat all users fairly without discriminatory bias.",
    solution: "Regular auditing and diverse training data implementation."
  },
  {
    icon: Users,
    title: "Privacy Protection",
    challenge: "Balancing data collection needs with user privacy rights.",
    solution: "Implementing privacy-by-design principles and data minimization."
  },
  {
    icon: Brain,
    title: "Transparency",
    challenge: "Making AI decision-making processes understandable to users.",
    solution: "Developing explainable AI models and clear documentation."
  },
  {
    icon: Lock,
    title: "Security",
    challenge: "Protecting AI systems from malicious attacks and misuse.",
    solution: "Regular security audits and robust defense mechanisms."
  }
];

export function Ethics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="ethics" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          AI Ethics
        </motion.h2>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {ethicsTopics.map((topic, index) => (
            <motion.div
              key={topic.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                  <topic.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{topic.title}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-blue-500">Challenge:</p>
                      <p className="text-gray-600 dark:text-gray-300">{topic.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-500">Solution:</p>
                      <p className="text-gray-600 dark:text-gray-300">{topic.solution}</p>
                    </div>
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