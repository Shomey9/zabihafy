import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./Header";
import SearchBar from "./SearchBar";
import RestaurantContainer from "./RestaurantContainer";
import RestaurantReview from "./RestaurantReview";

const fetchResponse = 
{
  "total": 8228,
  "businesses": [
    {
      "rating": 4,
      "price": "$",
      "phone": "+14152520800",
      "id": "E8RJkjfdcwgtyoPMjQ_Olg",
      "alias": "four-barrel-coffee-san-francisco",
      "is_closed": false,
      "categories": [
        {
          "alias": "coffee",
          "title": "Coffee & Tea"
        }
      ],
      "review_count": 1738,
      "name": "Four Barrel Coffee",
      "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      "coordinates": {
        "latitude": 37.7670169511878,
        "longitude": -122.42184275
      },
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      "location": {
        "city": "San Francisco",
        "country": "US",
        "address2": "",
        "address3": "",
        "state": "CA",
        "address1": "375 Valencia St",
        "zip_code": "94103"
      },
      "distance": 1604.23,
      "transactions": ["pickup", "delivery"]
    },
    // ...
  ],
  "region": {
    "center": {
      "latitude": 37.767413217936834,
      "longitude": -122.42820739746094
    }
  }
}

function App() {

  // 11523 Whittier Bridge LnSugar Land, TX 77498

  const [data, setData] = useState([])
  // const [myBackend, setMyBackend] = useState("")
  // console.log(myBackend)

  const BEARER_TOKEN = "3aTio_Vnt6LnEtPLXeighLJhAdc897oPsKJEWyy8wdOdLPYCODBJc8pA2RoR6BAFVfWzVXbW08njQGzGawtyNO0ORkuI09Fou_daCYndCjrQnFBZhD06Fr-OyS7TYXYx"
  
  // useEffect(
  //   ()=>{
  //     fetch("http://localhost:9292/users")
  //     .then(response=>response.json())
  //     .then(data=>
  //       setMyBackend(data)
  //     )
  //   },[]
  // )

  const onSubmit = async(Search) => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=Zabiha%20Halal&location=${Search}`, {
      method: "GET",
      headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
      mode: "no-cors",
      'Access-Control-Allow-Origin': '*',
      }
    })
    const res = await response.json()
    if (res.businesses) setData(res.businesses)
    // setData(fetchResponse.businesses)
  }
  // console.log(data)
  
  // if (data.length) console.log(data[0])
   
  // console.log(data["businesses"])
  // const businesses = data["businesses"]
  // console.log("Businesses: ", businesses)
  // console.log(businesses[0])

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" 
            element={
              <div>
                <Header />
                <SearchBar 
                  onSubmit = {onSubmit}
                />
                
                <RestaurantContainer 
                  data={data}
                /> 
              </div>
            }
          />
          <Route path="/:id" element={<RestaurantReview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
