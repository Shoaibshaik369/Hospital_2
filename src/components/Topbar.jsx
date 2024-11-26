import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaBed } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import "./Topbar.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  // State for bubble visibility
  const [showBubble, setShowBubble] = useState(false);

  // Toggle bubble visibility
  const toggleBubble = () => {
    setShowBubble((prev) => !prev);
  };

  return (
    <div className="topbar">
      {/* Left section */}
      <div className="rn">
        <h2 className="dd">
          <FaBars className="fb" />
          Vishwaraj Hospital <Link to={"/"}><FaHome className="hi" /></Link>
        </h2>
      </div>

      {/* Right section */}
      <div className="ht">
        <span className="bb">
          <input type="text" placeholder="Search By Patient Name" />
        </span>
        <AiOutlineGlobal className="ic" />
        <Link to={"/notifications"}><FaRegBell className="ic" /></Link>
        <FaBed className="ic" />
        <FaWhatsapp className="ic" />
        <Link to={"/calender"}><SlCalender className="ic" /></Link>
        <div className="icon-with-bubble">
          <IoMdCheckboxOutline className="ic" onClick={toggleBubble} />
          {showBubble && (
            <div className="bubble">
              <p>. Today you 0 Pending Tasks</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
