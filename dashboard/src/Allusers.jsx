/*import React, { useState, useEffect } from "react";
import axios from "axios";

const AllUsers = () => {
  const [refresh, setRefresh] = useState(false);
  const [allUsers, setSelecteduser] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8080/user/getallusers`)
      .then(res=> {
        console.log('data', res.data)
        setSelecteduser(res.data)
      }).catch(err => console.log(err))
  }, [refresh]);

  const BlockUser = async (id) => {
    try {
      // First, make the POST request to add the block
      const res = await axios.post(`http://localhost:8080/block/addblock`, {"userIduser": id});
  
      // Update the state to trigger a refresh
      setRefresh(!refresh);
  
      // Then, make the PUT request to update the user's block status
      await axios.put(`http://localhost:8080/user/block/${id}`, {"blockIdblock": res.data.idblock});
  
      console.log('User blocked successfully');
    } catch (err) {
      console.error('Error blocking user:', err);
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
                {allUsers.filter(e=>e.blockIdblock===null).map((e) => (
                  <div key={e.id} className="header">
                    <span>
                      <img
                        loading="lazy"
                        src={e.image}
                      />
                    </span>
                    <span>{e.fullname}</span>
                    <span>{e.emailphone}</span>
              
                    <span>
                      <button
                        onClick={() => BlockUser(e.iduser)}
                        className="delete-button"
                      >
                        Block
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

export default AllUsers;*/
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Allusers.css"
const AllUsers = () => {
  const [refresh, setRefresh] = useState(false);
  const [allUsers, setSelectedUser] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/user/getallusers`)
      .then(res => {
        console.log('data', res.data);
        setSelectedUser(res.data);
      })
      .catch(err => console.log(err));
  }, [refresh]);

  const blockUser = async (id) => {
    try {
      const res = await axios.post(`http://localhost:8080/block/addblock`, {"userIduser": id});
      setRefresh(!refresh);
      await axios.put(`http://localhost:8080/user/block/${id}`, {"blockIdblock": res.data.idblock});
      console.log('User blocked successfully');
    } catch (err) {
      console.error('Error blocking user:', err);
    }
  };

  return (
    <div className="container">
      <table className="user-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.filter(user => user.blockIdblock === null).map(user => (
            <tr key={user.id}>
              <td><img src={user.image} className="user-image" /></td>
              <td>{user.fullname}</td>
              <td>{user.emailphone}</td>
              <td>
                <button onClick={() => blockUser(user.iduser)} className="block-button">Block</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;

