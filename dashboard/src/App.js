import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dash from "./PartieAdmin/charts.jsx"
import Charts from "./PartieAdmin/side.jsx"
import Header from "./PartieAdmin/header.jsx"
import Home from "./PartieAdmin/home.jsx"
import All from "./PartieAdmin/all.jsx"
import AllUsers from './PartieAdmin/Allusers.jsx';
import AllEvents from './PartieAdmin/events.jsx';



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
