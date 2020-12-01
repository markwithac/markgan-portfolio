import React from 'react';
import { Link } from 'react-router-dom';


const AdminHome = () => {
  return (
    <nav className="admin-nav">
      <ul className="admin-list">
        <div className="admin-title">
          <Link to="/admin">Admin</Link>
        </div>
        <div className="admin-list">
          <li className="admin-list-item">
            <Link to="/admin/projects">Projects</Link>
          </li>
          <li className="admin-list-item">
            <Link to="/admin/articles">Articles</Link>
          </li>
        </div>
      </ul>
    </nav>
      
  )
};

export default AdminHome;