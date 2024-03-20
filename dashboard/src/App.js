import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dash from "./charts.jsx"
import Charts from "./side.jsx"
import Header from "./header.jsx"
import Home from "./home.jsx"
import All from "./all.jsx"
import AllUsers from './Allusers.jsx';
import AllEvents from './events.jsx';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Dash/>} />
    <Route path="/charts" element={<Charts/>} />
    <Route path="/header" element={<Header/>}/>
    <Route path="/home" element={<Home/>} />
    <Route path="/all" element={<All/>} />
    <Route path="/Users" element={<AllUsers/>} />
    <Route path="/Event" element={<AllEvents/>} />
    </Routes>
    </BrowserRouter>
  );
}




export default App;
