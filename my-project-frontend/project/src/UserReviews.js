import React from "react";

function UserReviews(props) {



    return(
        <div>
            {
                props.myBackendData.map(
                    (eachReview)=>{
                        return(
                            <div>
                                <p>Comment: {eachReview.comment}</p>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default UserReviews;