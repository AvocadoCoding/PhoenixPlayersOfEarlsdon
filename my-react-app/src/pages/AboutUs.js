import React from 'react';
import Navbar from '../components/Navbar';

function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="page-content" style={{ padding: '1rem' }}>
        <h2>About Us</h2>
          <p>
            The group 'morphed' into the Phoenix Players out of the drama group
            'The Magdalen Players' who operated from Saint Magdalen church by
            Hearsall Common. The Magdalen Players had been going for many years
            but in 1985 both Paul and then Dave joined and with further people,
            like John, Jan, Jennie the group eventually became Phoenix and moved
            to the Earlsdon Methodist Hall in 2000.
          </p>

          <p>
            Many people have come and gone since the earliest days, and together
            have produced over 50 plays since the 2000 move. The group relies on
            its members for all aspects of the production and acting, and at
            certain times, such as 2020 with Covid, could have folded due to lack
            of members, but has continued to soldier on through these periods to
            produce plays every year.
          </p>

          <p>
            The group is always open to new members, with room to help on various
            aspects of the production or take on an acting role. No previous
            experience is needed — if you are interested in joining please see the
            contact details section and get in touch.
          </p>

        <h2>Current Members</h2>
        
      </div>
    </div>
  );
}

export default AboutUs;
