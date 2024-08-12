import React from 'react';
import '.././assets/css/styles.css';
// import './Subscribe.css'; // Assuming you have a Subscribe.css file for styles

const Subscribe = () => {
    return (
        <section className="subscribe section">
            <h2 className="section__title">Subscribe to Our Newsletter</h2>
            <form action="" className="subscribe__form">
                <input type="email" placeholder="Enter your email" className="subscribe__input" />
                <button type="submit" className="button">Subscribe</button>
            </form>
        </section>
    );
};

export default Subscribe;
