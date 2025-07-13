import React from 'react';
import Image from 'next/image';

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <h2 className="section-title">DIRECTORS OF THE FRAME</h2>
        <div className="team-members">
          <div className="team-member">
            <div className="member-photo">
              <Image src="https://picsum.photos/400/400?grayscale" alt="Rishabh" width={400} height={400} />
            </div>
            <div className="member-info">
              <h3>Rishabh</h3>
              <p>Creative Director</p>
              <p>&quot;We don&apos;t just make videos - we engineer emotional experiences.&quot;</p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-photo">
              <Image src="https://picsum.photos/400/400?grayscale" alt="Shubham" width={400} height={400} />
            </div>
            <div className="member-info">
              <h3>Shubham</h3>
              <p>Technical Director</p>
              <p>&quot;8 years, 150+ projects, 25TB of raw passion.&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;