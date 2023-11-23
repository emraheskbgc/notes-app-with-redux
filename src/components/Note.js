import React from "react";

const Note = () => {
  return (
    <div className=" mainDiv ">
      <div className="left">
        <div>
          <input type="text" className="titleInput" placeholder="Note Title" />
        </div>
        <div>
          <textarea
            cols="21"
            rows="8"
            placeholder="Note"
            className="textarea"
          ></textarea>
        </div>
      </div>

      <div className="right">
        <h5>Chose Color</h5>
        <div className="colors">
          <button className="pink"></button>
          <button className="purple"></button>
          <button className="yellow"></button>
          <button className="blue"></button>
          <button className="green"></button>
        </div>
        <div>
          <button className=" btnAdd">ADD</button>
        </div>
      </div>
    </div>
  );
};

export default Note;
