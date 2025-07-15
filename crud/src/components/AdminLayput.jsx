import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AdminLayput = () => {
  return (
    <div>
      <div className="d-flex">
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-3 vh-100"
        style={{ width: "250px", minHeight: "100vh" }}
      >
        <h4 className="mb-4">My Dashboard</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/">Back to website</Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/admin">Admin</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Topbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
          <span className="navbar-brand">Topbar</span>
          <div className="ms-auto">
            <button className="btn btn-outline-primary">Logout</button>
          </div>
        </nav>

        {/* Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
     
    </div>
  )
}

export default AdminLayput
