import React, { useEffect } from "react";
import { useState } from "react";
import "../pages/admin/admin.css";
import { data, Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);


  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };




  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="header d-flex justify-content-between align-items-center">
        <h4 className="m-0">My Dashboard</h4>
        <button className="btn btn-light d-md-none" onClick={toggleSidebar}>
          ☰
        </button>
      </div>

      <div className="wrapper d-flex">
        {/* Sidebar */}
        <div className={`sidebar ${showSidebar ? "show" : ""}`}>
          <h5 className="p-3 border-bottom">Menu</h5>
          <Link to="/">Back to Website</Link>
          <Link to="/admin">Dashboard</Link>
        </div>

        {/* Main Content */}
        <div className="content p-3">
          <Outlet />
        </div>
      </div>

      {/* Mobile Overlay */}
      {showSidebar && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default AdminLayout;
