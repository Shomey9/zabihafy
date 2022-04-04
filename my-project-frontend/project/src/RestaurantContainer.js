import React from "react";
import Restaurants from "./Restaurants";

function RestaurantContainer(props) {
  console.log(props.data)
  const restaurantsData = props.data
  
  return (
    <div>
      {restaurantsData.map(
        (objs)=>{
          return(
            <Restaurants
              key={objs.id}
              eachRestaurant={objs}
            />
            // <div>i love hasb</div>
          )
        }
      )}
    </div>
  );
}

export default RestaurantContainer;
