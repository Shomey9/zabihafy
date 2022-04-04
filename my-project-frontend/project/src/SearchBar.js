import React, { useState } from "react";

function SearchBar(props) {
  const [searchBarContent, setSearchBarContent] = useState("")
  
  return (
    <div className="middle">
  
        <form onSubmit={
          (e)=>{
            e.preventDefault()
            props.onSubmit(searchBarContent)
          }

        }>
          <input
            onChange={
              (synthEvent)=>{
                synthEvent.preventDefault()
                // console.log("synthEvent Value: ", synthEvent.target.value)
                setSearchBarContent(synthEvent.target.value)
              }
            }
            value={searchBarContent}
          />
          <button>Submit</button>
        </form>
    </div>
  );
}

export default SearchBar;
