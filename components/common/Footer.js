import React from 'react';

const Footer = () => (
  <footer className="pt-5">
    <div className="custom-container mb-5 pb-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Follow us
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://www.instagram.com/commerce.js/"
                className="d-block font-color-medium"
                target="_blank"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-3">
            Contact Information:
          </p>
          <div className="position-relative">
            <input
              placeholder="512-739-0719"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="pt-md-5">
          <div className="font-color-brand font-size-caption py-4 text-right">
          <a
            >
              &copy; { new Date().getFullYear() } Carmona's Western Wear.
            </a>
          </div>
    </div>
  </footer>
);

export default Footer;
