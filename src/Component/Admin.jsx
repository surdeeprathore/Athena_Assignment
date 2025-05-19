import React, { useState } from 'react';
import './styles/Admin.css';
 
import { FiMail, FiBriefcase, FiUsers, FiEye, FiDownload, FiMenu, FiX, FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

const sections = [
  "Dashboard",
  "Messages",
  "Jobs",
  "Candidates",
  "Resumes",
  "Leave Management",
  "Performance Management",
  "Employe Management",
];



 
const Admin = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = isSidebarOpen ? 'auto' : 'hidden';
  };

  const renderContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return (
          <>
            <div className="stats">
              <div className="stat-card yellow">
                <FiMail size={30} />
                <div>
                  <p><strong>138</strong></p>
                  <p>Messages</p>
                </div>
              </div>
              <div className="stat-card blue">
                <FiBriefcase size={30} />
                <div>
                  <p><strong>50</strong></p>
                  <p>Jobs</p>
                </div>
              </div>
              <div className="stat-card green">
                <FiUsers size={30} />
                <div>
                  <p><strong>100</strong></p>
                  <p>Candidates</p>
                </div>
              </div>
            </div>

            <div className="card-section">
              <div className="card">
                <h3>Applied Jobs</h3>
                {[
                  { title: "Sales Executive", company: "Access Bank", time: "20mins ago" },
                  { title: "User Experience Designer", company: "Paystack", time: "10mins ago" },
                  { title: "Product Manager", company: "T-Pay", time: "5mins ago" }
                ].map((job, i) => (
                  <div key={i} className="entry">
                    <strong>{job.title}</strong><br />
                    <small>{job.company} · {job.time}</small>
                  </div>
                ))}
              </div>

              <div className="card">
                <h3>Employees</h3>
                {["John Doe", "Ginna Loe", "John Dore"].map((name, i) => (
                  <div key={i} className="entry" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <FaRegUserCircle className="icon" />
                      <div>
                        <strong>{name}</strong><br />
                        <small>Role: Product Manager</small>
                      </div>
                    </div>
                    <div>
                      <button><FiEye /></button>
                      <button><FiDownload /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );

      case "Messages":
        return (
          <div>
            <h3>Messages Inbox</h3>
            <p>No new messages at the moment.</p>
          </div>
        );

      case "Jobs":
        return (
          <div>
            <h3>Jobs Posted</h3>
            <ul>
              <li>Frontend Developer at Google</li>
              <li>Backend Developer at Amazon</li>
              <li>Data Analyst at Facebook</li>
            </ul>
          </div>
        );

      case "Candidates":
        return (
          <div>
            <h3>Candidate List</h3>
            <ul>
              <li>Alice Johnson</li>
              <li>Bob Smith</li>
              <li>Charlie Brown</li>
            </ul>
          </div>
        );

      case "Resumes":
        return (
          <div>
            <h3>Resume Submissions</h3>
            <p>5 new resumes uploaded today.</p>
          </div>
        );

      case "Leave Management":
        return (
          <div>
            <h3>Leave Requests</h3>
            <p>All leave requests are approved.</p>
          </div>
        );

      case "Performance Management":
        return (
          <div>
            <h3>Performance Reports</h3>
            <p>Performance reviews will be conducted next month.</p>
          </div>
        );

      case "Employe Management":
        return (
          <div className="employee-management">
            <div className="employee-header">
              <h3>Employee Management</h3>
              <div className="filter-export">
                <button className="filter-btn">🔽</button>
                <button className="export-btn">Export ✅</button>
              </div>
            </div>

            <table className="employee-table">
              <thead>
                <tr>
                  <th>Name(s)</th>
                  <th>Dept</th>
                  <th>Job Title</th>
                  <th>Start Date</th>
                  <th>Category</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "John Steven Doe", dept: "Design", job: "UI UX Designer", date: "28/04/2022", category: "Full time", gender: "Male" },
                  { name: "Barry Jhayson", dept: "IT", job: "Backend Engineer", date: "28/04/2022", category: "Remote", gender: "Male" },
                  { name: "Tiwa Cavage", dept: "Design", job: "UI UX Designer", date: "28/04/2022", category: "Full time", gender: "Female" },
                  { name: "James IDK", dept: "Design", job: "UI UX Designer", date: "28/04/2022", category: "Full time", gender: "Male" },
                  { name: "Vanessa Chidi", dept: "Design", job: "UI UX Designer", date: "28/04/2022", category: "Full time", gender: "Female" },
                  { name: "Don Gorgon", dept: "Design", job: "UI UX Designer", date: "28/04/2022", category: "Full time", gender: "Male" },
                  { name: "Sarah Wilson", dept: "Design", job: "UI UX Designer", date: "28/04/2022", category: "Full time", gender: "Female" },
                ].map((emp, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? "alt-row" : ""}>
                    <td>{emp.name}</td>
                    <td>{emp.dept}</td>
                    <td>{emp.job}</td>
                    <td>{emp.date}</td>
                    <td>{emp.category}</td>
                    <td>{emp.gender}</td>
                    <td>
                      <div className="action-dropdown">
                        <button className="action-btn">Actions ⬇</button>
                        <div className="dropdown-content">
                          <button>View Profile</button>
                          <button>Edit Profile</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      default:
        return <p>Section not found</p>;
    }
  };

  return (
    <div className="admin-container">
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGYAYqnA4DO_IumhNlL-th__fTmXB8X9B4lA&s" alt="Admin" />
          <h2>KRIS Admin</h2>
          <p>Admin</p>
        </div>
        <div className="sidebar-nav">
          {sections.map((item, idx) => (
            <button
              key={idx}
              className={item === activeSection ? "active" : ""}
              onClick={() => {
                setActiveSection(item);
                setIsSidebarOpen(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <button className="logout-btn">Log Out</button>
      </aside>

      <main className="main-content">
        <div className="top-bar">
          <button className="menu-toggle" onClick={toggleSidebar}>
            {isSidebarOpen ? <FiX /> : <FiMenu />}
          </button>
          <div className="title-wrapper">
            <h1 className={`section-heading ${activeSection.replace(/\s+/g, '-').toLowerCase()}`}>
              {activeSection}
            </h1>
            <p className="subtitle">Currently viewing {activeSection} section</p>
          </div>
          <div className="search-area">
            <select>
              <option>All Candidates</option>
              <option>Shortlisted</option>
              <option>Interviewed</option>
              <option>Hired</option>
              <option>Rejected</option>
            </select>
            <div className="search-input-wrapper">
              <FiSearch className="search-icon" />
              <input type="text" placeholder="Search..." />
            </div>
          </div>
        </div>
        {renderContent()}
      </main>
    </div>
  );
};

export default Admin;
