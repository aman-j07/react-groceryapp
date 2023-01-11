import React from "react";
import { Link } from "react-router-dom";

interface IProps{
  items:number
}

function Header(props:IProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 shadow">
      <div className="container-fluid">
        <span className="navbar-brand d-flex flex-column gap-1">
          <Link to='/'><img
            src="https://martjackstorage.blob.core.windows.net/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/userimages/logo.jpg"
            alt="logo"
          /></Link>
          <div className="btn-group">
          <button
            type="button"
            className="btn btn-success dropdown-toggle rounded-0 fs-5 p-1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            SHOP BY CATEGORY
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">Apparel </li>
            <li className="dropdown-item">Fruits & Vegetables</li>
            <li className="dropdown-item">Grocery</li>
            <li className="dropdown-item">Meat, Poultry & Fish </li>
            <li className="dropdown-item">Dairy, Frozen & Batters </li>
            <li className="dropdown-item">Bakery & Cakes </li>
            <li className="dropdown-item">Beverages</li>
            <li className="dropdown-item">Branded Food </li>
            <li className="dropdown-item">Home & Hygiene</li>
            <li className="dropdown-item">Snacks & Sweets</li>
            <li className="dropdown-item">Beauty & Personal Care</li>
            <li className="dropdown-item">Baby Food & Care </li>
            <li className="dropdown-item">Home & Kitchen</li>
            <li className="dropdown-item">Luggage & Travel </li>
            <li className="dropdown-item">Toys & Stationery </li>
            <li className="dropdown-item">Gardening </li>
            <li className="dropdown-item">Clothing & Accessories </li>
            <li className="dropdown-item">Electronics & Appliances Culinary</li>
          </ul>
        </div>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse align-items-center justify-content-between "
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <div className="input-group p-1">
              <input
                type="text"
                className="form-control border-end-0 py-0 shorttxt"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Choose from over 20000+ products across the brands and category"
              />
              <span
                className="input-group-text bg-white py-0"
                id="inputGroup-sizing-default"
              >
                <i className="bi bi-search fs-4"></i>
              </span>
            </div>
          </div>
          <button className="nav-link border-0 bg-transparent d-flex align-items-center fw-light px-1">
            <i className="bi bi-geo-alt text-success fs-3"></i>
            <span className="text-start text-dark d-flex flex-column lh-1">
              <span className="shorttxt">Home Delivery</span>
              <span>Oasis Center Bangalore</span>
            </span>
          </button>
          <Link to='/signInOut' className="text-decoration-none"><button className="nav-link border-0 bg-transparent d-flex align-items-center fw-light px-1">
            <i className="bi bi-person text-success fs-3"></i>
            <span className="text-start text-dark d-flex flex-column lh-1">
              Hello Signin to your account
            </span>
          </button></Link>
          <Link to='/cart' className="text-decoration-none"> <button className="nav-link border-0 bg-transparent d-flex align-items-center fw-light px-1">
            <i className="bi bi-cart3 text-success fs-3"></i>
            <span className="text-start text-dark d-flex flex-column lh-1">
              <span className="shorttxt mb-1">My Cart</span>
              <span className="text-danger fw-bold">{props.items} items</span>
            </span>
          </button></Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
