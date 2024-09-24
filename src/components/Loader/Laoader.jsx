import React from 'react';
import './Loader.css'; // Make sure to create this CSS file with your loader styles

const Loader = () => {
    return (
        <div className="loader">
            <span className="loader-text">loading</span>
            <span className="load"></span>
        </div>
    );
};

export default Loader;
