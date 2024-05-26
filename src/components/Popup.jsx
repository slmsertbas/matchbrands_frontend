import React from "react";

const Popup = ({ PopClose }) => {
    return (
        <>
            <div className="prop-main">
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="pop-card gap-4">
                        <button className="btn">Log in</button>
                        <button className="btn-2">Sign up</button>
                        <button onClick={PopClose} className="close-button">X</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popup;