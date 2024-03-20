import React, { useState } from 'react';
import Home from './home.jsx';
import Side from "./side.jsx";
import Charts from "./charts.jsx";
import AllUsers from './Allusers.jsx';
import AllEvents from './events.jsx';
import BlockUser from "./blockUser.jsx";

function All() {
  const [nav,setNav]=useState(0)
  return (
    <div className="flex justify-center mt-10 ">
      <div className="order-1">
        <Side setNav={setNav}/>
      </div>
      {nav==0&&
      <div className="order-2 ml-10">
       
       <Home />
        <Charts />

      </div>}
      {nav==1&&
      <div className="order-2 ml-10">
       <AllEvents />
      </div>}
      {nav==2&&
      <div className="order-2 ml-10">
       <AllUsers />
      </div>}
      {nav==3&&
        <div className="order-2 ml-10">
         <BlockUser />
        </div>}
    </div>
  );
}


export default All;


  