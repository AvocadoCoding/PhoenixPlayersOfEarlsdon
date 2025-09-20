import React from 'react';
import Navbar from '../components/Navbar';

import AlanImg from '../assets/images/members/Alan.JPG';
import DaveImg from '../assets/images/members/Dave.JPG';
import JanImg from '../assets/images/members/Jan.JPG';
import JaneImg from '../assets/images/members/Jane.JPG';
import JennieImg from '../assets/images/members/Jennie.JPG';
import JohnImg from '../assets/images/members/John.JPG';
import PaulImg from '../assets/images/members/Paul.JPG';
import SarahImg from '../assets/images/members/Sarah.JPG';
import WendyImg from '../assets/images/members/Wendy.JPG';

const members = [
  { name: 'Alan', img: AlanImg, bio: 'Versatile actor and set-building enthusiast, brings characters (and sets) to life.' },
  { name: 'Dave', img: DaveImg, bio: 'Long-time member and director, keeps rehearsals tight and productions on time.' },
  { name: 'Jan', img: JanImg, bio: 'Props and costumes wizard; if it sparkles or fits perfectly, it’s probably Jan.' },
  { name: 'Jane', img: JaneImg, bio: 'Behind the scenes manager; keeps the logistics running like clockwork.' },
  { name: 'Jennie', img: JennieImg, bio: 'Energetic actress and treasurer, keeps the plays and books balanced.' },
  { name: 'John', img: JohnImg, bio: 'Resident lighting and audio technician; brings the play to life.' },
  { name: 'Paul', img: PaulImg, bio: 'Long time member and experienced actor.' },
  { name: 'Sarah', img: SarahImg, bio: 'Natural lead and actress; shines on stage.' },
  { name: 'Wendy', img: WendyImg, bio: 'Actress, prompt and tea-urn hero; keeps the script flowing and cups full.' },
];

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

        {/* Members grid */}
        <div className="members-grid">
          {members.map((m) => (
            <article key={m.name} className="member-card">
              <img src={m.img} alt={`${m.name} — Phoenix Players member`} className="member-photo" />
              <h3 className="member-name">{m.name}</h3>
              <p className="member-bio">{m.bio}</p>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}

export default AboutUs;
