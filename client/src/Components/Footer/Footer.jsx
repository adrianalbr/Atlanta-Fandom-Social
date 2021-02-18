import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <h5 className="white-text">Inspiration</h5>
            <p className="grey-text text-lighten-4">
              Team Strange can all agree that inspiration came in abundance when
              building this application. To simply put it, we live and breathe
              for this culture, we consume it daily, it's our bread and butter,
              and so when being presented with the idea, we were ecstatic about
              moving forward as soon as possible.
            </p>
            <p>
              ❤️ We made this application using MongoDB, Express, React, and
              NodeJS. ❤️
            </p>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">© 2021 Copyright</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
