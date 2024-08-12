import React from 'react';
import '.././assets/css/styles.css';
// import './Experience.css'; // Assuming you have a Experience.css file for styles

const Experience = () => {
    return (
        <section className="experience section">
            <h2 className="section__title">With Our Experience <br /> We Will Serve You</h2>
            <div className="experience__container container grid">
                <div className="experience__content grid">
                    <div className="experience__data">
                        <h2 className="experience__number">20</h2>
                        <span className="experience__description">Year <br /> Experience</span>
                    </div>
                    <div className="experience__data">
                        <h2 className="experience__number">75</h2>
                        <span className="experience__description">Complete <br /> tours</span>
                    </div>
                    <div className="experience__data">
                        <h2 className="experience__number">650+</h2>
                        <span className="experience__description">Tourist <br /> Destination</span>
                    </div>
                </div>
                <div className="experience__img grid">
                    <div className="experience__overlay">
                        <img src="img/experience1.jpg" alt="" className="experience__img-one" />
                    </div>
                    <div className="experience__overlay">
                        <img src="img/experience2.jpg" alt="" className="experience__img-two" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
