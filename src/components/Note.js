import React, { useState } from "react";
import List from "./List";

import { useDispatch } from "react-redux";
import { addNewNote } from "../redux/notes/noteSlice";
import { BsCheckCircle } from "react-icons/bs";

const Note = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("default");

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };
  const handleColorChange = (color) => {
    setColor(color);
  };

  const handleAddNote = () => {
    const newNote = {
      id: "3",
      title: title,
      description: description,
      color: color,
    };
    dispatch(addNewNote(newNote));
    setTitle("");
    setDescription("");
    setColor("default");
  };

  return (
    <>
      <div className=" mainDiv ">
        <div className="left">
          <div>
            <input
              value={title}
              onChange={handleTitleChange}
              type="text"
              className="titleInput"
              placeholder="Note Title"
            />
          </div>
          <div>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
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
            <button
              className="pink"
              onClick={() => {
                handleColorChange("#e91e63");
              }}
            >
              {color === "#e91e63" ? <BsCheckCircle /> : ""}
            </button>
            <button
              className="purple"
              onClick={() => {
                handleColorChange("#9c27b0");
              }}
            >
              {color === "#9c27b0" ? <BsCheckCircle /> : ""}
            </button>
            <button
              className="yellow"
              onClick={() => handleColorChange("#ffeb3b")}
            >
              {color === "#ffeb3b" ? <BsCheckCircle /> : ""}
            </button>
            <button
              className="blue"
              onClick={() => handleColorChange("#1e88e5")}
            >
              {color === "#1e88e5" ? <BsCheckCircle /> : ""}
            </button>
            <button
              className="green"
              onClick={() => handleColorChange("#1dca1d")}
            >
              {color === "#1dca1d" ? <BsCheckCircle /> : ""}
            </button>
          </div>
          <div>
            <button className=" btnAdd" onClick={handleAddNote}>
              ADD
            </button>
          </div>
        </div>
      </div>

      <List />
    </>
  );
};

export default Note;
