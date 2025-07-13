import React from 'react';

const Process = () => {
  const steps = [
    { number: '1', title: 'SCRIPT LAB', description: 'Storyboarding your vision with precision and creative insight.' },
    { number: '2', title: 'LENS MAGIC', description: 'Precision shooting with cinematic techniques and equipment.' },
    { number: '3', title: 'POST-PRODUCTION', description: 'Editing, VFX & color grading to perfection.' },
    { number: '4', title: 'GLOBAL DELIVERY', description: '4K-ready files delivered anywhere in the world.' },
  ];

  return (
    <section id="process" className="py-20 bg-dark-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 cinematic-border inline-block pb-4">
            THE BROFIED METHOD
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-black/50 p-8 border border-gray-800 hover:border-red-500 transition-colors group"
            >
              <div className="text-red-500 text-4xl font-bold mb-4 group-hover:text-white transition-colors">
                {step.number}
              </div>
              <h3 className="text-2xl mb-3 group-hover:text-red-500 transition-colors">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;