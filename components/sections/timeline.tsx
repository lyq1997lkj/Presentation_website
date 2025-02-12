"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timelineEvents = [
  {
    year: 1950,
    title: "Turing Test Proposed",
    description: "Alan Turing proposes the Turing Test as a measure of machine intelligence."
  },
  {
    year: 1956,
    title: "Birth of AI",
    description: "Dartmouth Conference coins the term 'Artificial Intelligence'."
  },
  {
    year: 1997,
    title: "Deep Blue Defeats Kasparov",
    description: "IBM's Deep Blue defeats world chess champion Garry Kasparov."
  },
  {
    year: 2011,
    title: "IBM Watson Wins Jeopardy",
    description: "Watson defeats human champions on the quiz show Jeopardy!"
  },
  {
    year: 2012,
    title: "Deep Learning Breakthrough",
    description: "Deep learning makes breakthrough in image recognition with AlexNet."
  },
  {
    year: 2022,
    title: "ChatGPT Launch",
    description: "OpenAI launches ChatGPT, revolutionizing natural language processing."
  }
];

export function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          AI Development Timeline
        </motion.h2>
        
        <div 
          ref={ref}
          className="relative max-w-4xl mx-auto"
        >
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
          
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Content */}
              <div className={`w-1/2 px-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <span className="text-2xl font-bold text-blue-500">{event.year}</span>
                  <h3 className="text-xl font-semibold mt-2">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{event.description}</p>
                </div>
              </div>
              
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full">
                <div className="absolute w-8 h-8 bg-blue-500 rounded-full opacity-25 animate-ping" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}