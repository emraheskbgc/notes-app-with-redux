import React from "react";
import Search from "./Search";
import { useSelector, useDispatch } from "react-redux";
import { setSearchNote, removeNote } from "../redux/notes/noteSlice";
import { Trash } from "react-bootstrap-icons";

const List = () => {
  const items = useSelector((state) => state.notes.items);
  const searchNote = useSelector((state) => state.notes.searchNote);
  const dispatch = useDispatch();

  const filteredNotes = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchNote.toLowerCase()) ||
      item.description.toLowerCase().includes(searchNote.toLowerCase())
  );

  const handleRemove = (id) => {
    dispatch(removeNote(id));
  };

  return (
    <>
      <Search searchNote={searchNote} setSearchNote={setSearchNote} />
      <div className="down">
        {filteredNotes.map((item) => (
          <div
            className="card"
            style={{ backgroundColor: item.color }}
            key={item.id}
          >
            <div className="icerik">
              <h2>{item.title}</h2>
              <p> {item.description}</p>
            </div>
            <div className="icons">
              <span onClick={() => handleRemove(item.id)}>
                <Trash />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
