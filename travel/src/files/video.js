import React from 'react';
import '.././assets/css/styles.css';
// import './Video.css'; // Assuming you have a Video.css file for styles

const Video = () => {
    return (
        <section className="video section">
            <h2 className="section__title">Video Tour</h2>
            <div className="video__container container">
                <p className="video__description">Find out more with our video of the most beautiful and 
                    pleasant places for you and your family.
                </p>
                <div className="video__content">
                    <video id="video-file">
                        <source src="video/video.mp4" type="video/mp4" />
                    </video>
                    <button className="button button--flex video__button" id="video-button">
                        <i className="ri-play-line video__button-icon" id="video-icon"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Video;
