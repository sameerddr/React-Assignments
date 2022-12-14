import React from "react";
import { useState } from "react";
import "./Todo.css";
function Todo() {
  const [task, settask] = useState("");
  const [data, setdata] = useState([]);
  const [edit, setedit] = useState(false);
  const [read, setread] = useState(true);

  function onChangeHandler(e) {
    settask(e.target.value);
  }

  function submit(e) {
    console.log("submit");
    e.preventDefault();
    settask("");
    const newdata = task;
    setdata([...data, newdata]);
  }

  const deleteItem = (id) => {
    const finalData = data.filter((curEle, index) => {
      return index !== id;
    });
    setdata(finalData);
  };

  const editItem = () => {
    setread(false);
  };
  const saveItem = () => {
    setread(true);
  };

  return (
    <>
      <div className="container">
        <label>
          Your Todo
          <input
            type="text"
            className="input"
            value={task}
            onChange={onChangeHandler}
          />
        </label>
        <button type="submit" onClick={submit}>
          Create Todo
        </button>
        <button onClick={editItem}>Edit</button>
        <button onClick={saveItem}>Save</button>
        <div className="CONTENT">
          {data.map((val, index) => {
            return (
              <div>
                <input
                  className="type"
                  type="text"
                  defaultValue={val}
                  readOnly={read}
                />
                <button onClick={() => deleteItem(index)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Todo;
