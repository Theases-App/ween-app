import React, { useState, useEffect } from "react";
import axios from "axios";

const AllEvents = () => {
  const [allEvents, setEvents] = useState([]);
  const [refresh,setRefresh]=useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/event/getall`)
      .then(res => {
        setEvents(res.data)
      })
      .catch(err => console.log(err))
      
  },[refresh])
  
  const handleDelete = (eventId) => {
    axios.delete(`http://localhost:8080/event/delete/${eventId}`)
      .then(res => {
        setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId))
        setRefresh(!refresh)
      })
      .catch(err => console.log(err))
  }

 const Accept = (eventId) => {
  
    axios.put(`http://localhost:8080/event/update/${eventId}`,{"adminmessage":1})
    .then(response => console.log(response))
    .catch(err => console.log(err))
  
  };


  return (
    <div className="flex w-full flex-col items-stretch mt-4 px-4 max-md:max-w-full">
      <div className="flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <div className="max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
           
            </div>
            <div className="customers-overview">
              <div className="header">
              <span>Image</span>
              <span>Event name</span>
              <span>Date</span>
              <span>Status</span>
              </div>

              <div>
                {allEvents.map((e) => (
                  <div key={e.id} className="header">
                    <span>
                      <img
                        loading="lazy"
                        src={e.image}
                        alt={e.eventname}
                      />
                    </span>
                    <span>{e.eventname}</span>
                    <span>
                      <button
                        onClick={() => handleDelete(e.idevent)}
                        className="delete-button"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => Accept(e.idevent)}
                        className="delete-button"
                      >
                        Accept
                      </button>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
