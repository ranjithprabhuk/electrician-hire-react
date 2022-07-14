import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { SignUp } from "./components/Signup";
import { Login } from "./components/Login";
import { Jobseekerdashboard } from "./components/job-seeker/Jobseekerdashboard";
import { Jobseekerapplyjob } from "./components/job-seeker/Jobseekerapplyjob";
import { Jobseekerappliedjob } from "./components/job-seeker/Jobseekerappliedjob";
import { Customerdashboard } from "./components/customer/Customerdashboard";
import { Admindashboard } from "./components/admin/Admindashboard";
import { Admineditcandidates } from "./components/admin/Admineditcandidates";
import { Admincandidates } from "./components/admin/Admincandidates";
import { Customeraddjob } from "./components/customer/Customeraddjob";
import "./App.css";

export default function App() {
  return (
    <div>
      <nav>
        <ul class="links">
          <li>
            <Link to="/user/signup">Signup</Link>
          </li>
          <li>
            <Link to="/user/login">Login</Link>
          </li>
        </ul>

        <ul class="links">
          <li>
            <Link to="/user/dashboard">Job Seeker Dashboard</Link>
          </li>
          <li>
            <Link to="/jobseeker/applyJob">Apply Job</Link>
          </li>
          <li>
            <Link to="/jobseeker/appliedJob">Applied Jobs</Link>
          </li>
        </ul>

        <ul class="links">
          <li>
            <Link to="/customer/dashboard">Customer Dashboard</Link>
          </li>
          <li>
            <Link to="/customer/addJob">Add Job</Link>
          </li>
          <li>
            <Link to="/customer/viewAppliedCandidates">View Applied Candidates</Link>
          </li>
        </ul>

        <ul class="links">
          <li>
            <Link to="/admin/getAllJobs">Admin Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/profile">Admin Candidates</Link>
          </li>
          <li>
            <Link to="/admin/editProfile/:id">Admin Edit Candidates</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/signup" element={<SignUp />} />

          <Route path="/user/dashboard" element={<Jobseekerdashboard />} />
          <Route path="/jobseeker/applyJob" element={<Jobseekerapplyjob />} />
          <Route
            path="/jobseeker/appliedJob"
            element={<Jobseekerappliedjob />}
          />

          <Route path="/customer/dashboard" element={<Customerdashboard />} />
          <Route path="/customer/addJob" element={<Customeraddjob />} />
          <Route
            path="/customer/viewAppliedCandidates"
            element={<Customerdashboard />}
          />

          <Route path="/admin/getAllJobs" element={<Admindashboard />} />
          <Route path="/admin/profile" element={<Admincandidates />} />
          <Route
            path="/admin/editProfile/:id"
            element={<Admineditcandidates />}
          />
        </Routes>
      </div>
    </div>
  );
}
