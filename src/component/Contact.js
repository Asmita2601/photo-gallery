import React from "react";
import { NavLink } from "react-router-dom";
import "../component/Contact.css";

const Contact =() =>{
    return(
     <>
        <section class="main2">
            <br/><br/>
            <hr className="line"/>
            <h2 className="heading">Apply For <b>Your Item</b> Here.</h2>
         <div className="main-container">
            <div className="box">
            <NavLink to="/photo-gallery">
                <span className="go-back"><button className="back-button">Go back</button></span>
            </NavLink>
            <form action="https://formspree.io/f/xoqzqdje" method="POST">
             <h3>Item</h3>
             <input type="text" name="item" placeholder="Ex.Masala-chai" autoComplete="off" required/>
             <h3>Your Username</h3>
             <input type="text" name="username" placeholder="Ex.Skmandal" autoComplete="off" required/>
             <h3>Email</h3>
             <input type="email" name="email" placeholder="Ex.@alansmithee" autoComplete="off" required/>
              <h3>Price Of Item</h3>
             <input type="text" name="price" placeholder="Price dependes on quality.Ex.0.06ETH" autoComplete="off" required/>
             <h3>Description</h3>
             <input type="text" name="description" placeholder="Give us your idea" autoComplete="off" required/>
             <br/><br/>
             <input className="btnn" type="submit" value="Submit Your Applying" />
             </form>
            </div>
            </div>
            
          
        </section>
      
     </>

     

    )
};
export default Contact;