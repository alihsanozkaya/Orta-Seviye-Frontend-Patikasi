import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/notes/notesSlice";
import Checked from "./Checked";
import NotChecked from "./NotChecked";

const Form = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState(localStorage.getItem("color") || ""); // Başlangıçta color state'i localStorage'dan alınır
  const dispatch = useDispatch();

  const handleColorChange = (newColor) => {
    setColor(newColor);
    localStorage.setItem("color", newColor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length > 1) {
      dispatch(addNote({ text, color }));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control w-50 mx-auto mt-3">
        <textarea
          className="w-100 mx-auto"
          style={{ height: 125, border: "none" }}
          placeholder="Enter your note here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="d-flex justify-content-between mb-2">
          <div>
            {["red", "purple", "yellow", "blue", "green"].map((col) => (
              <button
                key={col}
                className={`rounded-circle bg-${col} p- me-2`}
                onClick={(e) => {
                  e.preventDefault();
                  handleColorChange(col);
                }}
              >
                {color === col ? <Checked /> : <NotChecked />}
              </button>
            ))}
          </div>
          <button className="btn btn-success w-25 rounded-5">ADD</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
