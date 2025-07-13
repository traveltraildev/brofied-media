import React from 'react';
import Image from 'next/image';

const Team = () => {
  const teamMembers = [
    {
      name: 'Rishabh',
      role: 'Creative Director',
      quote: 'We don\'t just make videos - we engineer emotional experiences.',
      image: 'https://picsum.photos/400/400?grayscale'
    },
    {
      name: 'Shubham',
      role: 'Technical Director',
      quote: '8 years, 150+ projects, 25TB of raw passion.',
      image: 'https://picsum.photos/400/400?grayscale'
    }
  ];

  return (
    <section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 cinematic-border inline-block pb-4">
            DIRECTORS OF THE FRAME
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 overflow-hidden rounded-full w-48 h-48 border-4 border-gray-800">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={400} 
                  height={400} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-red-500 mb-3">{member.role}</p>
                <p className="text-gray-400 italic">"{member.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;