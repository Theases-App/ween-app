import React, { useState, useEffect } from "react";
import axios from "axios";

const AllUsers = () => {
  const [refresh, setRefresh] = useState(false);
  const [allUsers, setSelecteduser] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/user/getallusers`)
      .then(res=> {
        console.log('data', res.data)
        setSelecteduser(res.data)
      }).catch(err => console.log(err))
  }, [refresh]);

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/user/delete/${id}`)
      setRefresh(!refresh);
    } catch (err) {
      console.log(err);
    }
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
                <span>Name</span>
                <span>Email</span>
                <span>Status</span>
              </div>

              <div >
                {allUsers.map((e) => (
                  <div key={e.id} className="header">
                    <span>
                      <img
                        loading="lazy"
                        src={e.image}
                      />
                    </span>
                    <span>{e.name}</span>
                    <span>{e.email}</span>
              
                    <span>
                      <button
                        onClick={() => handleDeleteUser(e.id)}
                        className="delete-button"
                      >
                        Delete
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

export default AllUsers;