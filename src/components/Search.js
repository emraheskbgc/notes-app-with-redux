import React, { useState, useRef, useEffect } from "react";

const Search = () => {
  const [hiddenImg, setHiddenImg] = useState(true);
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
