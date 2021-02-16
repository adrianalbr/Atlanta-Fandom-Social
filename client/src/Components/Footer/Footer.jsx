import React from "react";
import "./Footer.css";

const Footer = () => {
return (
    <div>
    <footer className="page-footer">
        <div className="container">
        <div className="row">
            <div className="col l6 s12">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">
            I'm sure me and my team can all agree that inspiration came in abundance when building this application. To simply put it, we live and breathe for this culture, we consume it daily, it's our bread and butter, and so when being presented with the idea,
            we were ecstatic about moving forward as soon as possible. 
            ❤️ We made this application using MongoDB, Express, React, and NodeJS. ❤️
            </p>
            </div>
            <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
                <li>
                <a className="grey-text text-lighten-3" href="#!">
                    Link 1
                </a>
                </li>
                <li>
                <a className="grey-text text-lighten-3" href="#!">
                    Link 2
                </a>
                </li>
                <li>
                <a className="grey-text text-lighten-3" href="#!">
                    Link 3
                </a>
                </li>
                <li>
                <a className="grey-text text-lighten-3" href="#!">
                    Link 4
                </a>
                </li>
            </ul>
            </div>
        </div>
        </div>
        <div className="footer-copyright">
        <div className="container">
            © 2021 Copyright Text
        </div>
        </div>
    </footer>
    </div>
);
};

export default Footer;
