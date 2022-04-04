import React from "react";
// import RestaurantReview from "./RestaurantReview";
import { Link } from 'react-router-dom';

function Restaurants(props) {
  console.log(props.eachRestaurant)
  return (
    <div className="restaurants">
      <p className="middle">{props.eachRestaurant.name}</p>
      <p className="middle">{props.eachRestaurant.categories[0]["alias"]}</p>
      {/* <p>{props.eachRestaurant.location.address1}</p> */}
      <Link to={`/${props.eachRestaurant.id}`}>Learn More</Link>
    </div>
  );
}

export default Restaurants;