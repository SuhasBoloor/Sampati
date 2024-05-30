import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route
  } from "react-router-dom";

function NavBar() {
    const [showForm, setShowForm] = useState(true)

    const handleForm = (arg) => {
        setShowForm(arg);
    };
    const tagline = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: '3vw',
        fontWeight: "Bold",
        padding: "1rem",
        // boxShadow: "1px 4px 5px 2px rgba(0, 0, 0, 0.2)"
    };

    const SearchInput = {
        width: '40vw',
    }
    return (
        <div className='NavBar'>
            <div className='Title'>
                <div className='Container'>
                <img id='Logo' src='../Images/Logo.jpg' alt='Sampati Logo' />
                <h5>Sampati</h5>
                </div>
                <div className='Container'>
                    <p>Sign In</p>
                    <p>Log In</p>
            <Link to="/help"><p  onClick={()=>handleForm(false)}>Help</p></Link>
            <Link to="/about"><p  onClick={()=>handleForm(false)}>About Us</p></Link>
            <Link to="/contact"><p  onClick={()=>handleForm(false)}>Contact Us</p></Link>
                </div>
            </div>
            <p style={tagline}>Welcome to Sampati, Gateway to your Dream Home</p>
            <nav className='NavOpt'>
            <Link className='ClickOpt' to="/" onClick={()=>handleForm(true)}><p >Home</p></Link>
            <Link className='ClickOpt' to="/buy" onClick={()=>handleForm(true)}><p>Buy</p></Link>
            <Link className='ClickOpt' to="/rent" onClick={()=>handleForm(true)}><p>Rent</p></Link> 
            <Link className='ClickOpt' to="/sell" onClick={()=>handleForm(true)}><p >Sell</p></Link>  
                
            </nav>
            {showForm?
            <form className='SearchOpt'>
                
                <select className='SearchSize'>
                    <option>Mangalore</option>
                    <option>Bangalore</option>
                    <option>Chennai</option>
                    <option>Kasargod</option>
                    <option>Udupi</option>
                    <option>Sulia</option>
                    <option>Puttur</option>
                    <option>More</option>
                </select>
                <input style={SearchInput} className='SearchSize' type='text' placeholder='Enter city or Pincode...' />
                <button className='SearchSize'>Search</button>
            </form>: 
                <div></div>}
        </div>
    )
}

export default NavBar
