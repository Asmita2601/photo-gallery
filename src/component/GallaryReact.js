import React, { useState } from "react";
import "../component/tab.css";
import Menu from "./Menu";
import { NavLink } from "react-router-dom";
// import Contact from "./Contact";

const GallaryReact =()=>{
    const[items, setItems] = useState(Menu );

   const filterItems = (categItem) => {
    const updatedItems = Menu.filter((curElem) => {
        return curElem.category === categItem;
    });
    setItems(updatedItems);
   }

    return(
<>
<h1 className="heading">Order Your Favourite Dish</h1>
<hr/>
<div className="menu-tabs-container">
<div className="my-button">
    <button className="btn" onClick={() => filterItems("Breakfast")}>Breakfast</button>
    <button className="btn" onClick={() => filterItems("lunch")}>Lunch</button>
    <button className="btn" onClick={() => filterItems("evening")}>Evening</button>
    <button className="btn" onClick={() => filterItems("dinner")}>Dinner</button>
    <button className="btn" onClick={() => setItems(Menu)}>All</button>
</div>
</div>
{/* my main items sections=== */}
<div className="container grid grid-three-column">

{
    items.map((elem) => {
const { id, name, image, description, price } = elem;

return(
 
<div className="card-container">
    <div className="card-image">
        <img src={ image} alt={name}/>
    </div>
    <div className="card-menu">
        <h3 className="food-name">{ name }</h3>
        <p>{description}</p>
        <div className="price-or-order">
            <span className="price">{ price }</span>
            <NavLink to="/contact">
                <button>Order Now</button>
                </NavLink>
        </div>
        <p>Price may vary on selected date</p>
    </div>
</div>

)
  })
}
</div> 
</>
    )
};
export default GallaryReact;