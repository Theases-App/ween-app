/*import React, { useState, useEffect } from "react";
import axios from "axios";

const Block = () => {
    const[data,setData]=useState([])
    const[refresh,setRefresh]=useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8080/user/getallusers`)
      .then(res=> {
        console.log('data', res.data)
        setData(res.data)
      }).catch(err => console.log(err))
      }, [refresh]);
      const BlockUser = async (id) => {
        try {
          await  axios.put(`http://localhost:8080/user/block/${id}`,{"blockIdblock":null})
          setRefresh(!refresh)
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
                    {data.filter(e=>e.blockIdblock!==null).map((e) => (
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
                            UnBlock
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
}
export default Block;
*/
import React, { useState, useEffect } from "react";
import axios from "axios";


const Block = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/user/getallusers`)
      .then((res) => {
        console.log('data', res.data)
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  const BlockUser = async (id) => {
    try {
      await axios.put(`http://localhost:8080/user/block/${id}`, {
        blockIdblock: null,
      });
      setRefresh(!refresh);
    } catch (err) {
      console.log(err);
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
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((e) => e.blockIdblock !== null).map((e) => (
            <tr key={e.id}>
              <td>
                <img
                  loading="lazy"
                  src={e.image}
                  className="user-image"
                />
              </td>
              <td>{e.fullname}</td>
              <td>{e.emailphone}</td>
              <td>
                <button
                  onClick={() => BlockUser(e.iduser)}
                  className="block-button"
                >
                  Unblock
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Block;

















