import React from 'react'

function Footer() {
    const Footer = {
        width:"100vw",
        marginTop:"3vh",
        padding:"2vh 5vw",
        backgroundColor:"blue",
        color: "white",
        display:"flex"
    };
    const verticalSpace = {
        width:"60vw"
    }
  return (
    <div style={Footer}>
      <p>&copy; [2024] Sampati</p>
      <div style={verticalSpace}></div>
      <p>All rights reserved.</p>
    </div>
  )
}

export default Footer
