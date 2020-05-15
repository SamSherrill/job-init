import React from 'react';
import "./NoMatch.css"
import gif from "../../img/404.gif"

const NoMatch = () => {
    return (
        <div className="container nomatch-gif">
            <div className="row justify-content-center">
                <img src={gif} alt="404-Page Not Found" className="nm-gif"/>
            </div>
        </div>
    );
};

export default NoMatch;