import React from "react";
import { BsGrid1X2Fill, BsPeople, BsCardText } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { ImTicket } from "react-icons/im";
import { Link } from "react-router-dom";
import "./side.css"
 
function Side({setNav}) {
  return (
    <aside id="sidebar">
      <div className="title">
        <div className="brand">
          <ImTicket className="icon_header" />Tickets
        </div>
        <span className="toclose">X</span>
      </div>
      <ul className="list">
        <li className="sidebar-list"  onClick={()=>{
            setNav(0)
          }}>

          <BsGrid1X2Fill className="icon"/>Dashboard
      
        </li>

        <li className="sidebar-list"  onClick={()=>{
            setNav(1)
          }}>
        
            <GiMoneyStack className="icon"/>Events
          
        </li>

        <li className="sidebar-list"  onClick={()=>{
            setNav(2)
          }}>
          
            <BsPeople className="icon"/>Users
         
        </li>

        <li className="sidebar-list">
          <a href="#">
            <BsCardText className="icon" />Reports
          </a>
        </li>

        <li className="sidebar-list">
          <a href="#">
            <FiSettings className="icon" />Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Side;
