import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserReviews from "./UserReviews.js";


// const fetchResponse = 
// {
//     "id": "WavvLdfdP6g8aZTtbBQHTw",
//     "alias": "gary-danko-san-francisco",
//     "name": "Gary Danko",
//     "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
//     "is_claimed": true,
//     "is_closed": false,
//     "url": "https://www.yelp.com/biz/gary-danko-san-francisco?adjust_creative=wpr6gw4FnptTrk1CeT8POg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=wpr6gw4FnptTrk1CeT8POg",
//     "phone": "+14157492060",
//     "display_phone": "(415) 749-2060",
//     "review_count": 5296,
//     "categories": [
//       {
//         "alias": "newamerican",
//         "title": "American (New)"
//       },
//       {
//         "alias": "french",
//         "title": "French"
//       },
//       {
//         "alias": "wine_bars",
//         "title": "Wine Bars"
//       }
//     ],
//     "rating": 4.5,
//     "location": {
//       "address1": "800 N Point St",
//       "address2": "",
//       "address3": "",
//       "city": "San Francisco",
//       "zip_code": "94109",
//       "country": "US",
//       "state": "CA",
//       "display_address": [
//         "800 N Point St",
//         "San Francisco, CA 94109"
//       ],
//       "cross_streets": ""
//     },
//     "coordinates": {
//       "latitude": 37.80587,
//       "longitude": -122.42058
//     },
//     "photos": [
//       "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
//       "https://s3-media4.fl.yelpcdn.com/bphoto/FmXn6cYO1Mm03UNO5cbOqw/o.jpg",
//       "https://s3-media4.fl.yelpcdn.com/bphoto/HZVDyYaghwPl2kVbvHuHjA/o.jpg"
//     ],
//     "price": "$$$$",
//     "hours": [
//       {
//         "open": [
//           {
//             "is_overnight": false,
//             "start": "1730",
//             "end": "2200",
//             "day": 0
//           },
//           {
//             "is_overnight": false,
//             "start": "1730",
//             "end": "2200",
//             "day": 1
//           },
//           {
//             "is_overnight": false,
//             "start": "1730",
//             "end": "2200",
//             "day": 2
//           },
//           {
//             "is_overnight": false,
//             "start": "1730",
//             "end": "2200",
//             "day": 3
//           },
//           {
//             "is_overnight": false,
//             "start": "1730",
//             "end": "2200",
//             "day": 4
//           },
//           {
//             "is_overnight": false,
//             "start": "1730",
//             "end": "2200",
//             "day": 5
//           },
//           {
//             "is_overnight": false,
//             "start": "1730",
//             "end": "2200",
//             "day": 6
//           }
//         ],
//         "hours_type": "REGULAR",
//         "is_open_now": false
//       }
//     ],
//     "transactions": [],
//     "special_hours": [
//       {
//         "date": "2019-02-07",
//         "is_closed": null,
//         "start": "1600",
//         "end": "2000",
//         "is_overnight": false
//       }
//     ]
//   }

function RestaurantReview() {
//   console.log(props.eachRestaurant)
  const [information, setInformation] = useState()
  const [beInformation, setBeInformation] = useState()
  const [userName, setUserName] = useState("")
  const [userImage, setUserImage] = useState("")
  const [userComment, setUserComment] = useState("")
  const [myBackendData, setMyBackendData] = useState("")
  console.log("myBackendData: ", myBackendData)

  let { id } = useParams();
  const BEARER_TOKEN = "3aTio_Vnt6LnEtPLXeighLJhAdc897oPsKJEWyy8wdOdLPYCODBJc8pA2RoR6BAFVfWzVXbW08njQGzGawtyNO0ORkuI09Fou_daCYndCjrQnFBZhD06Fr-OyS7TYXYx"

    const fetchRestaurant = async() => {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`, {
          method: "GET",
          headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          mode: "no-cors",
          'Access-Control-Allow-Origin': '*',
          }
        })
        const res = await response.json()
        setInformation(res)
      }
    
    useEffect(
      ()=>{
        fetch("http://localhost:9292/reviews")
        .then(response=>response.json())
        .then(data=>
          // console.log("My Data:", data)
          setMyBackendData(data)
        )
      },[]
    )
    
    
    // const fetchBackEnd = async() => {
    //   const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`, {
    //     method: "POST",
    //     headers: {
    //     Authorization: `Bearer ${BEARER_TOKEN}`,
    //     mode: "no-cors",
    //     'Access-Control-Allow-Origin': '*',
    //     }
    //     body: {
          
    //     }
    //   })
    //   const res = await response.json()
    //   setBeInformation(res)
    // }

    useEffect(()=>{
        fetchRestaurant()
        // fetchBackEnd()
        // setInformation(fetchResponse)
    },[]
    )

    const submitReview = () => {
        const response = fetch(`http://localhost:9292/reviews`, {
          method: "POST",
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              comment: userComment
            }
          )

          
          }

        ).then(resp=>resp.json())
        .then(newReview=>
          // console.log("My Data:", data)
          setMyBackendData([newReview, ...myBackendData])
        )


        // const res = response.json()
        // if (res.businesses) setData(res.businesses)
        // // setData(fetchResponse.businesses)
        // fetch("http://localhost:9292/reviews")
        // .then(response=>response.json())
        // .then(newReview=>
        //   // console.log("My Data:", data)
        //   setMyBackendData([...myBackendData, newReview ])
        // )

    }

    if (!information) {
        return(
            <div>...Loading</div>
        )
    }

  return (
    <div className="restaurantReview">
        <p>{information.name}</p>
        <img className="restaurant_image" src={information.image_url} alt=""/>
        <p>{information.location.address1}, {information.location.city}, {information.location.state}, {information.location.zip_code}</p>
        <p>{information.phone}</p>


        <form onSubmit={
          (e)=>{
            e.preventDefault()
            submitReview()
          }
        }>
          {/* <input
            placeholder="username"
            onChange={
              (synthEvent)=>{
                synthEvent.preventDefault()
                // console.log("username: ", synthEvent.target.value)
                setUserName(synthEvent.target.value)
              }
            }
            value={userName}
          /> */}
          {/* <input
            placeholder="userimage link"
            onChange={
              (synthEvent)=>{
                synthEvent.preventDefault()
                // console.log("userImage: ", synthEvent.target.value)
                setUserImage(synthEvent.target.value)
              }
            }
            value={userImage}
          /> */}
          <input
            placeholder="user comment"
            onChange={
              (synthEvent)=>{
                synthEvent.preventDefault()
                // console.log("userComment: ", synthEvent.target.value)
                setUserComment(synthEvent.target.value)
              }
            }
            value={userComment}
          />
          <button>X</button>
        </form>


        <p>Reviews: </p>
        <div>
            <UserReviews 
              myBackendData={myBackendData}
            />
        </div>
    </div>
  );
}

export default RestaurantReview;