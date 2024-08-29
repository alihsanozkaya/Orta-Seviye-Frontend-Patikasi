import { useState } from "react";
import { useSelector } from "react-redux";
import { selectNotes } from "../redux/notes/notesSlice";

const NoteList = () => {
  const [filterText, setFilterText] = useState("");
  const items = useSelector(selectNotes);
  
  const filtered = items.filter((item) => 
    item.text.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <>
      <input 
        className="form-control w-25 mx-auto mt-3" 
        placeholder="Search..." 
        value={filterText} 
        onChange={(e) => setFilterText(e.target.value)} 
      />
      {filtered.map((item, index) => (
        <div className={`card mt-4 bg-${item.color}`} key={index}>
          <div className="card-header">Note {index + 1}</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{item.text}</p>
            </blockquote>
          </div>
        </div>
      ))}
    </>
  );
};

export default NoteList;
