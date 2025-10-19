import React, { useRef } from 'react';
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

import Set2 from '../assets/images/set-building/Set2.JPG';
import Set3 from '../assets/images/set-building/Set3.JPG';
import Set4 from '../assets/images/set-building/Set4.JPG';
import Set5 from '../assets/images/set-building/Set5.JPG';

// 🎵 Import sound effects
import TelephoneSound from '../assets/sound/old-telephone-ringing.mp3';
import DoorbellSound from '../assets/sound/sound-effect-doorbell-rings-single.mp3';
import SeasideSound from '../assets/sound/sound-effect-seagulls.mp3'; // fixed extension

const members = [
  { name: 'Alan', img: AlanImg, bio: 'Versatile actor and set-building enthusiast, brings characters (and sets) to life.' },
  { name: 'Dave', img: DaveImg, bio: 'Long time member and director, keeps rehearsals tight and productions on time.' },
  { name: 'Jan', img: JanImg, bio: 'Props and costumes wizard; if it sparkles or fits perfectly, it’s probably Jan.' },
  { name: 'Jane', img: JaneImg, bio: 'Behind the scenes manager; keeps the logistics running like clockwork.' },
  { name: 'Jennie', img: JennieImg, bio: 'Energetic actress and treasurer, keeps the plays and books balanced.' },
  { name: 'John', img: JohnImg, bio: 'Resident lighting and audio technician; creates and brings the ambience.' },
  { name: 'Paul', img: PaulImg, bio: 'Long time member and experienced actor.' },
  { name: 'Sarah', img: SarahImg, bio: 'Natural actress; shines on stage.' },
  { name: 'Wendy', img: WendyImg, bio: 'Actress, prompt and tea-urn hero; keeps the script flowing and cups full.' },
];

const setPhotos = [Set2, Set3, Set4, Set5];

function AboutUs() {
  // 🔊 Refs for sound elements
  const telephoneRef = useRef(null);
  const doorbellRef = useRef(null);
  const seasideRef = useRef(null);

  // Toggle play/pause for a sound
  const toggleSound = (audioRef) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      // Stop all other sounds before playing a new one
      [telephoneRef, doorbellRef, seasideRef].forEach((ref) => {
        if (ref.current && ref.current !== audio) {
          ref.current.pause();
          ref.current.currentTime = 0;
        }
      });

      audio.currentTime = 0;
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  };

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

        {/* NEW: What we do */}
        <br />
        <h2>What we do</h2>
        <p>
          Preparing a play involves many aspects in addition to choosing a script,
          assigning acting roles and rehearsing lines and choreography. We also have
          to build the set, prepare sound and lighting effects and ready costumes and
          props. There is always a lot to do and we welcome new members who would be
          interested in being involved on stage or off stage.
        </p>

        <h3>Building a set</h3>
        <p>
          Here are a few photographs of a set we prepared for the play 'Forget me Knot',
          the set is designed according to the guidelines set out in the script, to
          simulate the audience being able to see into several rooms at once. Every set
          is prepared uniquely for each play, with some improvisation using the materials
          and furniture we manage to procure!
        </p>

        {/* Set-building photo grid */}
        <div className="set-grid">
          {setPhotos.map((src, idx) => (
            <figure className="set-card" key={`set-${idx}`}>
              <img
                src={src}
                alt={`Set build ${idx + 1}`}
                className="set-photo"
                loading="lazy"
              />
            </figure>
          ))}
        </div>

        <h3>Sound effects</h3>
        <p>
          Sound effects can be introduced to fit the plot or help create the ambience! Click the icons below to hear a few examples:
        </p>

        {/* 🎧 Sound Effect Buttons */}
        <div className="sound-icons">
          <button className="sound-btn" onClick={() => toggleSound(telephoneRef)}>☎ Telephone</button>
          <button className="sound-btn" onClick={() => toggleSound(doorbellRef)}>🔔 Doorbell</button>
          <button className="sound-btn" onClick={() => toggleSound(seasideRef)}>🌊 Seaside</button>

          {/* Hidden audio elements */}
          <audio ref={telephoneRef} src={TelephoneSound} />
          <audio ref={doorbellRef} src={DoorbellSound} />
          <audio ref={seasideRef} src={SeasideSound} />
        </div>

        <br />
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



