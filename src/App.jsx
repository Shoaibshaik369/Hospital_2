//import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardCard from "./components/DashboardCard";
import ChartCard from "./components/ChartCard";
import Calendar from "./components/Calendar";
import UserCard from "./components/UserCard";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Appointment from "./components/sections/Appointment";
import Biiling from "./components/sections/Biiling";
import Dashboard from "./components/sections/Dashboard";
import Pharmacy from "./components/sections/pharmacy";
import Pathology from "./components/sections/pathology";
import Radiology from "./components/sections/radiology";
import Opd from "./components/sections/Opd";
import Notification from "./Notification";
import Ambulance from "./components/Ambulance";
import Birthrecord from "./components/Birthrecord";
import  Deathrecord  from "./components/Deathrecord";
import  Dutyroster  from "./components/Dutyroster";
import  Expense  from "./components/Expense";
import  Frontoffice  from "./components/Frontoffice";
import Messaging from "./components/Messaging";
import  Ipd  from "./components/Ipd";
import  Income  from "./components/Income";
import Referral from "./components/Referral";
import Tpamanagement from "./components/Tpamanagement";
import  Bloodbank  from "./components/Bloodbank";
import  Humanresource  from "./components/Humanresource";

const App = () => (
  <div className="app">
    <Sidebar />
    <div className="main-content">
      <Topbar />
      <Routes>
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/billing" element={<Biiling />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/radiology" element={<Radiology />} />
        <Route path="/pathology" element={<Pathology />} />
        <Route path="/opd" element={<Opd />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/calender" element={<Calendar/>} />
        <Route path="/notifications" element={<Notification/>} />
        <Route path="/ambulance" element={<Ambulance/>} />
        <Route path="/b&drecords/birth-record" element={<Birthrecord/>} />
        <Route path="/b&drecords/death-record" element={<Deathrecord/>} />
        <Route path="/duty-roster" element={<Dutyroster/>} />
        <Route path="/finance/expenses" element={<Expense/>} />
        <Route path="/front-office" element={<Frontoffice/>} />
        <Route path="/messaging" element={<Messaging/>} />
        <Route path="/ipd" element={<Ipd/>} />
        <Route path="/finance/income" element={<Income/>} />
        <Route path="/referral" element={<Referral/>} />
        <Route path="/tpamanagement" element={<Tpamanagement/>} />
        <Route path="/blood-bank" element={<Bloodbank/>} />
        <Route path="/human-resource" element={<Humanresource/>} />
        <Route />
      </Routes>
    </div>
  </div>
);

export default App;
