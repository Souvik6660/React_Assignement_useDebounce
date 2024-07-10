import React from 'react';
import "./Search.css";
import useDebounce from '../Customhooks/useDebounce';
function Search({update}) {
  const debouncecallback=useDebounce((e)=>update(e.target.value),596)
  return (
    <div className="search-container">
       
      <input type="text" className="search-bar"      
      
      onChange={debouncecallback}
      placeholder="Enter Username..." />
    </div>
  );
}

export default Search;
