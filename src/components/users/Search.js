import React, { useState } from "react";
import PropTypes from 'prop-types';

// pass destructued props into arrow function
const Search = ({ showClear, clearUsers, searchUsers, setAlert }) => {
  const [text, setText] = useState("");

  // using arrow functions eliminates the need to explicity bind 'this'
  // use computed value for 'name' key so onChange could be used for multiple inputs
  const onChange = e => setText(e.target.value);

  // pass up value of search input to App component using props
  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a search term.", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };


    return (
      <div>
        <form className="form" onSubmit={onSubmit}>
          <input 
          type="text" 
          name="text" 
          placeholder="Search Users..." 
          value={text} 
          onChange={onChange} />
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
        { showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
      </div>
    );
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
}

export default Search;
