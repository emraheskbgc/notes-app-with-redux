import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

const Search = ({ searchNote, setSearchNote }) => {
  const [hiddenImg, setHiddenImg] = useState(true);
  const dispatch = useDispatch();
  const inputFocusRef = useRef(null);
  const handleClickImg = () => {
    setHiddenImg(false);
  };
  const handleBlurkInput = () => {
    setHiddenImg(true);
  };
  useEffect(() => {
    if (hiddenImg === false) {
      inputFocusRef.current.focus();
    }
  }, [hiddenImg]);

  return (
    <div className="search">
      {hiddenImg ? (
        <img src="/search.png" alt="" onClick={handleClickImg} />
      ) : (
        <input
          value={searchNote}
          onChange={(e) => dispatch(setSearchNote(e.target.value))}
          ref={inputFocusRef}
          type="search"
          placeholder="Search..."
          onBlur={handleBlurkInput}
        />
      )}
    </div>
  );
};

export default Search;
