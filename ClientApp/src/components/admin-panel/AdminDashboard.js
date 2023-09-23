import React, { Component } from "react";
import "../css/admin/dashboard.css";
import { Link } from 'react-router-dom';
import { FaUsers, FaCog, FaChartBar } from 'react-icons/fa';

export class Admin extends Component {
  render() {
    return (
      <div>
        <div className="dashboard">
          <h2>Admin Dashboard</h2>
          <nav>
            <ul>
              <li>
                <Link to="/users">
                  <FaUsers /> Users
                </Link>
              </li>
              <li>
                <Link to="/settings">
                  <FaCog /> Settings
                </Link>
              </li>
              <li>
                <Link to="/analytics">
                  <FaChartBar /> Analytics
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
