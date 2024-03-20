import React, { useEffect, useState } from 'react'
import 
{BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import { ImTicket } from "react-icons/im";
 import axios from 'axios'
 import './home.css'

function Home() {
 //const [data,setData]=useState([])
  const [usersNumber,SetUsersNumber]=useState(0)
  const [eventsNumber,SetEventsNumber]=useState(0)
  useEffect(()=>{
    axios.get(`http://localhost:8080/user`).then(ress=>{
      SetUsersNumber(ress.data.length)
      console.log(ress.data.length)
    })
  },[])
  useEffect(()=>{
    axios.get(`http://localhost:8080/event`).then(ress=>{
      SetEventsNumber(ress.data.length)
      console.log(ress.data.length)
    })
  },[])
    const data = [
        {
          name: 'Event 1',
          Available_Places: 4000,
          Places_Reservited:2400,
          amt: 2400,
        },
        {
          name: 'Event 2',
          Available_Places: 3000,
          Places_Reservited: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          Available_Places: 2000,
          Places_Reservited: 1800,
          amt: 2290,
        },
        {
          name: 'Page D',
          Available_Places: 3780,
          Places_Reservited: 2908,
          amt: 2000,
        },
        {
          name: 'Page E',
          Available_Places: 1890,
          Places_Reservited: 800,
          amt: 2181,
        },
        {
          name: 'Page F',
          Available_Places: 3390,
          Places_Reservited: 2800,
          amt: 2500,
        },
        {
          name: 'Page G',
          Available_Places: 3490,
          Places_Reservited: 4300,
          amt: 2100,
        },
      ];
     


/*const [events, setEvents] = useState([])

useEffect(() => {
  axios.get(`http://localhost:8080/event`)
    .then(res => {
      const Events=res.data
      const eventsWithAvailablePlaces=Events.map(event=>{
        const totalPlaces = event.numberpeople
        const reservedPlaces=event.reservations.length;
        const availablePlaces=totalPlaces-reservedPlaces
        return {...event,availablePlaces}
      })
      setEvents(eventsWithAvailablePlaces)
    })
    .catch(error=>{
      console.error('can not fetch events:',error)
    })
},[])
*/
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3 id="dash">DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Events</h3>
                    <ImTicket className='card_icon'/>
                </div>
                <h1>{eventsNumber}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>5</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>USERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>{usersNumber}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>REPORTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>10</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="90%" height="90%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 40,
                bottom: 30,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Places_Reservited" fill=" #ff5252" />
                <Bar dataKey="Available_Places" fill="#7be105" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </main>
  )
}

export default Home