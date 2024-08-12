import React from 'react';
import '.././assets/css/styles.css';
// import './Place.css'; // Assuming you have a Place.css file for styles

const Place = () => {
    return (
        <section className="place section" id="place">
            <h2 className="section__title">Most Popular Places</h2>
            <div className="place__container container grid">
                <div className="place__data">
                    <img src="img/place1.jpg" alt="" className="place__img" />
                    <h3 className="place__title">Paris</h3>
                    <span className="place__description"></span>
                </div>
                <div className="place__data">
                    <img src="img/place2.jpg" alt="" className="place__img" />
                    <h3 className="place__title">New York</h3>
                    <span className="place__description"></span>
                </div>
                <div className="place__data">
                    <img src="img/place3.jpg" alt="" className="place__img" />
                    <h3 className="place__title">Indonesia</h3>
                    <span className="place__description"></span>
                </div>
                <div className="place__data">
                    <img src="img/place4.jpg" alt="" className="place__img" />
                    <h3 className="place__title">Baalik</h3>
                    <span className="place__description"></span>
                </div>
                <div className="place__data">
                    <img src="img/place5.jpg" alt="" className="place__img" />
                    <h3 className="place__title">Seoul</h3>
                    <span className="place__description"></span>
                </div>
            </div>
        </section>
    );
};

export default Place;
