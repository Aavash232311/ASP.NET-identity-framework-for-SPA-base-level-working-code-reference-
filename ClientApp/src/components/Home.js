import React, { Component } from "react";
import "./css/home.css";
import authService from "./api-authorization/AuthorizeService";
import { Link } from "react-router-dom";
import { NavItem, NavLink } from "reactstrap";

export class Home extends Component {
  static displayName = Home.name;
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="home-page">
          <header id="header">
            <h1>Welcome to our Real Estate portal</h1>
            <p>Your Trusted Source for Finding Your Dream Home</p>
          </header>
          <br />
          <h2>Featured Properties</h2> <br />
          <section className="featured-properties" id="featured-properties">
            <ul className="h-list">
              <li className="h-li">
                <div className="property-card" id="property-1">
                  <img src="property1.jpg" alt="Property 1" />
                  <h3>Beautiful Villa</h3>
                  <p>3 Bedrooms | 2 Bathrooms | 1,800 sq. ft.</p>
                  <span>$350,000</span>
                </div>
              </li>
              <li className="h-li">
                <div className="property-card" id="property-2">
                  <img src="property2.jpg" alt="Property 2" />
                  <h3>Luxury Condo</h3>
                  <p>2 Bedrooms | 2 Bathrooms | 1,200 sq. ft.</p>
                  <span>$250,000</span>
                </div>
              </li>
              <li className="h-li">
                <div className="property-card" id="property-2">
                  <img src="property2.jpg" alt="Property 2" />
                  <h3>Luxury Condo</h3>
                  <p>2 Bedrooms | 2 Bathrooms | 1,450 sq. ft.</p>
                  <span>$350,000</span>
                </div>
              </li>
            </ul>
          </section>
          <hr style={{ visibility: "hidden" }}></hr>
          <section className="search-properties" id="search-properties">
            <h2>Find Your Dream Home</h2> <br />
            <div>
              <p>Search for properties by location, price, and more...</p>
              <form id="search-form">
                <input type="text" placeholder="Location" id="location-input" />
                <input type="number" placeholder="Max Price" id="price-input" />
                <button type="submit" id="search-button">
                  Search
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
