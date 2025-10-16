import React from 'react';
import Navbar from '../components/Navbar';
import './Gallery.css';


function importAll(r) {
return r.keys().map(r);
}


const images = importAll(
require.context('../assets/images/gallery', false, /\.(jpe?g|JPE?G|png|gif)$/i)
);


export default function Gallery() {
return (
<div>
<Navbar />
<div className="page-content" style={{ padding: '1rem' }}>
<h2>Gallery</h2>
<p>
Below are a few photographs from previous plays — if you visit our stage on a performance night,
you will see photograph boards of all of our plays from over the years!
</p>


<div className="gallery-grid" aria-label="Production photo gallery">
{images.slice(0, 18).map((src, idx) => (
<div key={idx} className="gallery-card">
<div className="gallery-card-content">
<img src={src} alt={`Gallery ${idx + 1}`} loading="lazy" />
</div>
</div>
))}
</div>
</div>
</div>
);
}
