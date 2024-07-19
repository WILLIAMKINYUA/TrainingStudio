import React from 'react'
import"./Contact.css"


import { useState } from 'react'
const Contact = () => {
 const[userData,setUserData]=useState({
  Name:"",Email:"",Subject:"",Message:"", });
  
  console.log(userData)
 
  const SubmitData=async(event)=>{event.preventDefault();}
  return ( <div className="contacthome">
    <div className="contactpage">
    <div className="googlemap">
      <img src="" alt="Oops Not Applicable" className="map"/>
    </div>
    <div className="form">
      <div className="cform">
        <form action="POST">
          <div className="contactdetails">
            <input type="text" value={userData.Name} onChange={event=>event.target.value}placeholder="Your Name*"className="contactname"/>
            <input type="email"value={userData.Email}onChange={event=>event.target.value} placeholder="Your Email*"className="contactemail"/>
          </div>
          <input type="text"value={userData.Subject} onChange={event=>event.target.valuePostUserData} placeholder="Subject*"className="contactsubject"/>
          <textarea name=""  cols="30" rows="12" value={userData.Message} onChange={event=>event.target.value} placeholder="Message"className="contactmessage"></textarea>
          <button type="submit" onClick={SubmitData} className="btn">Send Message</button>
        </form>
      </div>
    </div>
  </div>
  <div className="footpage">
    <div className="footerone">
    Copyright &copy;<span>2023 Willy's Studio - Designed by</span>
    <span className="footercolor">William Kinyua</span>
  </div>
  <div className="footertwo">
    <span>Distributed by:</span><span className="footercolor"> Theme Unknown</span>
  </div>
  </div>
    
  </div>
  )
}

export default Contact