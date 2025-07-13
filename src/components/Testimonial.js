import React from 'react';

const Testimonial = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">CLIENT TESTIMONIALS</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">
              &quot;BROFIED transformed our brand with stunning visuals that captured our 
              essence perfectly. Their cinematic approach elevated our product launch.&quot;
            </p>
            <div className="client-info">
              <h3>Alex Morgan</h3>
              <p>Marketing Director, Tech Innovations</p>
            </div>
          </div>
          
          <div className="testimonial-card">
            <div className="quote-icon">❝</div>
            <p className="testimonial-text">
              &quot;Working with BROFIED was a game-changer. Their music video captured 
              the emotion of our song in ways we never imagined possible.&quot;
            </p>
            <div className="client-info">
              <h3>Sarah Johnson</h3>
              <p>Recording Artist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;