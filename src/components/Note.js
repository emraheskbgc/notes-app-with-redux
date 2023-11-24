import React, { useState } from "react";
import List from "./List";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addNewNote } from "../redux/notes/noteSlice";

const Note = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("default");
  const [showAlert, setShowAlert] = useState(false);

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
      id: uuidv4(),
      title: title,
      description: description,
      color: color,
    };
    if (title === "" || description === "" || color === "default") {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      return;
    }
    dispatch(addNewNote(newNote));
    setTitle("");
    setDescription("");
    setColor("default");
  };

  return (
    <div className="container">
      <div className=" mainDiv row">
        <div className="left col-md-6">
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

        <div className="right col-md-6">
          <h5>Chose Color</h5>
          <div className="colors">
            <button
              className={`pink ${color === "#e91e63" ? "focus-ring " : ""}`}
              onClick={() => {
                handleColorChange("#e91e63");
              }}
            ></button>
            <button
              className={`purple ${color === "#9c27b0" ? "focus-ring " : ""}`}
              onClick={() => {
                handleColorChange("#9c27b0");
              }}
            ></button>
            <button
              className={`yellow ${color === "#ffeb3b" ? "focus-ring" : ""}`}
              onClick={() => handleColorChange("#ffeb3b")}
            ></button>
            <button
              className={`blue ${color === "#1e88e5" ? "focus-ring" : ""}`}
              onClick={() => handleColorChange("#1e88e5")}
            ></button>
            <button
              className={`green ${color === "#1dca1d" ? "focus-ring" : ""}`}
              onClick={() => handleColorChange("#1dca1d")}
            ></button>
          </div>
          <div>
            <button className=" btnAdd" onClick={handleAddNote}>
              ADD
            </button>
            {showAlert && (
              <div className="alert alert-danger">
                Lütfen İlgili Alanları Doldurun !
              </div>
            )}
          </div>
        </div>
      </div>

      <List />
    </div>
  );
};

export default Note;
