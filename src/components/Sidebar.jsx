import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoDesktopOutline,
  IoCashOutline,
  IoCalendarOutline,
  IoMedkitOutline,
  IoFlaskOutline,
  IoImagesOutline,
  IoWaterOutline,
  IoCarSportOutline,
  IoBarChartOutline,
  IoShareOutline,
} from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaHospital, FaBookDead, FaUserAlt } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true); // Sidebar state
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const menuItems = [
    { icon: <IoBarChartOutline />, text: "Dashboard", link: "/" },
    { icon: <IoCashOutline />, text: "Billing", link: "/billing" },
    { icon: <IoCalendarOutline />, text: "Appointment", link: "/appointment" },
    { icon: <IoMedkitOutline />, text: "OPD - Out Patient", link: "/opd" },
    { icon: <FaHospital />, text: "IPD - In Patient", link: "/ipd" },
    { icon: <IoFlaskOutline />, text: "Pharmacy", link: "/pharmacy" },
    { icon: <IoImagesOutline />, text: "Pathology", link: "/pathology" },
    { icon: <IoImagesOutline />, text: "Radiology", link: "/radiology" },
    { icon: <IoWaterOutline />, text: "Blood Bank", link: "/blood-bank" },
    { icon: <IoCarSportOutline />, text: "Ambulance", link: "/ambulance" },
    { icon: <IoDesktopOutline />, text: "Front Office", link: "/front-office" },
    {
      icon: <FaBookDead />,
      text: "Birth & Death Record",
      dropdown: [
        { text: "Birth Record", link: "/b&drecords/birth-record" },
        { text: "Death Record", link: "/b&drecords/death-record" },
      ],
    },
    { icon: <FaUserAlt />, text: "Human Resource", link: "/human-resource" },
    { icon: <IoCalendarOutline />, text: "Duty Roster", link: "/duty-roster" },
    {
      icon: <IoCashOutline />,
      text: "Finance",
      dropdown: [
        { text: "Income", link: "/finance/income" },
        { text: "Expenses", link: "/finance/expenses" },
      ],
    },
    { icon: <IoShareOutline />, text: "Referral", link: "/referral" },
    { icon: <MdMessage />, text: "Messaging", link: "/messaging" },
    { icon: <MdMessage />, text: "TPA Management", link: "/tpamanagement" },
  ];

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <div className="logo">
        <img src="https://hospital.gtechxchange.com/uploads/hospital_content/logo/1.png?1732256459" alt="" />
      </div>
      {/* Toggle Button */}
      <div className="toggle-btn" onClick={toggleSidebar}>
        {isExpanded ? "<<" : ">>"}
      </div>

      {/* Sidebar Menu */}
      {menuItems.map((item, index) => (
        <div key={index}>
          {/* Main menu item */}
          <Link
            to={item.link || "#"}
            onClick={item.dropdown ? () => toggleDropdown(index) : null}
            className="menu-item"
          >
            <span className="icon">{item.icon}</span>
            {isExpanded && item.text}
            {item.dropdown && isExpanded && (
              <span className="dropdown-icon">
                {activeDropdown === index ? "▲" : "▼"}
              </span>
            )}
          </Link>

          {/* Dropdown menu */}
          {item.dropdown && activeDropdown === index && isExpanded && (
            <div className="dropdown">
              {item.dropdown.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  to={subItem.link}
                  className="dropdown-item"
                >
                  {subItem.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
