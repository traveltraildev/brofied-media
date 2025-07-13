import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      quote: "BROFIED transformed our brand with stunning visuals that captured our essence perfectly. Their cinematic approach elevated our product launch.",
      author: "Alex Morgan",
      role: "Marketing Director, Tech Innovations"
    },
    {
      quote: "Working with BROFIED was a game-changer. Their music video captured the emotion of our song in ways we never imagined possible.",
      author: "Sarah Johnson",
      role: "Recording Artist"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-dark-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 cinematic-border inline-block pb-4">
            CLIENT TESTIMONIALS
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-black/50 p-8 border border-gray-800 relative"
            >
              <div className="text-red-500 text-5xl absolute top-4 left-4">❝</div>
              <p className="text-gray-300 italic pl-8 mt-6">
                {testimonial.quote}
              </p>
              <div className="mt-6 pl-8">
                <h3 className="text-xl font-bold">{testimonial.author}</h3>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;