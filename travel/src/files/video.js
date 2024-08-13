import React, { useRef } from 'react';
import '.././assets/css/styles.css';

const Video = () => {
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current) { // Check if the videoRef is not null
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        } else {
            console.error('Video reference is null');
        }
    };
    
    

    return (
        <section className="video section">
            <h2 className="section__title">Video Tour</h2>
            <div className="video__container container">
                <p className="video__description">
                    Find out more with our video of the most beautiful and pleasant places for you and your family.
                </p>
                <div className="video__content">
                    {/* <video ref={videoRef} id="video-file">
                        <source src="video/video.mp4" type="video/mp4" />
                    </video> */}
                    <video id="video-file" controls>
    <source src="video/video.mp4" type="video/mp4" />
</video>

                    <button
                        // className="button button--flex video__button"
                        // id="video-button"
                        onClick={togglePlay}
                    >
                        {/* <i className="ri-play-line video__button-icon" id="video-icon"></i> */}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Video;
