import React from 'react';
import '.././assets/css/styles.css';
// Assuming you have a Sponsor.css file for styles

const Sponsor = () => {
    return (
        <section className="sponsor section">
            <h2 className="section__title">Our Sponsors</h2>
            <div className="sponsor__container container grid">
                <img src="img/sponsor1.jpg" alt="" className="sponsor__img" />
                <img src="img/sponsor2.png" alt="" className="sponsor__img" />
                <img src="img/sponsor3.png" alt="" className="sponsor__img" />
                <img src="img/sponsor4.png" alt="" className="sponsor__img" />
                <img src="img/sponsor5.png" alt="" className="sponsor__img" />
                {/* Add more sponsor images */}
            </div>
        </section>
    );
};

export default Sponsor;
