import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const colors = ['red', 'blue', 'green', 'yellow'];

function TodoList() {
  const [objects, setObjects] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch("https://api.restful-api.dev/objects")
      .then((response) => response.json())
      .then((data) => setObjects(data));
  }, []);

  const handleSubmit = () => {
    fetch("https://api.restful-api.dev/objects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    })
      .then((response) => response.json())
      .then((newObject) => setObjects([...objects, newObject]));
      setName('');
     
  };
  const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow', 'lightpink', 'lightsalmon'];

  const getColor = (index) => {
    return colors[index % colors.length];
  };

  return (
    <div>
      <h1>Fake API List</h1>
      <ul style={{width:"400px",display:"block", alignItems:"flex-start",listStyle:"none",textAlign:"left",padding:"10px"}}>
        {objects.map((obj,index) => (
          <li key={obj.id} style={{ backgroundColor: getColor(index),padding:"10px" }}>
            {obj.name}  {obj.data?.Generation}  {obj.data?.Capacity}  {obj.data?.Price} {obj.data?.color} {obj.data?.price} {obj.data?.capacity}
           
          </li>
        ))}
      </ul>
    
        <div style={{padding:"10px"}}>
        <input
          type="text"
          aria-label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{width:"100%",height:"30px"}}
        />
        </div>
        {/* <div >
        <input
          type="text"
          aria-label="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div> */}

      <button onClick={handleSubmit} style={{width:"150px",height:"40px",alignItems:"center",color:"lightgreen",backgroundColor:"green",}}>Submit</button>
    </div>
  );
}

export default TodoList;
