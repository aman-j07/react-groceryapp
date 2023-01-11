import React from "react";

function Footer() {
  return (
    <section className="bg-grey">
      <div className="d-flex justify-content-between mt-2 p-4 border-bottom border-danger">
        <span className=''>Get new recipes & blogs in your inbox every week</span>
        <div className="d-flex">
          <input type="email" className="form-control rounded-0" placeholder="Enter your Email ID"/>
          <button className="btn btn-success rounded-0" type="button" id="button-addon2">SUBSCRIBE</button>
        </div>
      </div>
      <div className="d-flex justify-content-evenly py-4">
        <span> <img src="https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/logo.jpg" alt="logo" /></span>
        <ul className="text-muted shorttxt lh-sm text-start list-unstyled fw-light">
        <li className="fw-bold text-dark list-style-none">Information</li>
        <li>About Us</li>
        <li>Privacy Policy</li>
        <li>Terms</li>
        <li>Store Locator</li>
        </ul>
        <ul className="text-muted shorttxt lh-sm text-start list-unstyled fw-light">
        <li className="fw-bold text-dark list-style-none">Shopping</li>
        <li>Your Account</li>
        <li>FAQs</li>
        <li>Return Policy</li>
        </ul>
        <ul className="text-muted shorttxt lh-sm text-start list-unstyled fw-light">
        <li className="fw-bold text-dark list-style-none">Engage</li>
        <li>Contact Us</li>
        <li>Share Feedback</li>
        <li>Corporate Site</li>
        </ul>
        <span className="d-flex flex-column gap-1">
            <span className="d-flex gap-2">
                <img src='https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/flogo.jpg' alt='logo sm'/>
                <span className="d-flex flex-column gap-1 align-items-start"><span className="shorttxt text-muted fw-light">Download the SPAR India Mobile App</span><span className="d-flex gap-2"><img src='https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/gplay.jpg' alt='google play store'/><img src='https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/appstore.jpg' alt='apple play store'/></span></span>
            </span>
            <span className="text-start d-flex gap-2 align-items-end"><span>Connect with us</span><i className="bi bi-facebook fs-4"></i><i className="bi bi-twitter fs-4"></i><i className="bi bi-instagram fs-4"></i></span>
            <span className="text-start d-flex align-items-center gap-1"><i className="bi bi-headset text-success fs-4"></i> <span>#########</span></span>
        </span>
      </div>
    </section>
  );
}

export default Footer;
