import { useEffect, useState } from "react";
import ChackBox from "../ChackBox/ChackBox";
import "./input.scss";

export default function Input({ data, setData }) {
  let [checked, setCheck] = useState(false);

  return (
    <div className="inputBox">
      <ChackBox checked={checked} setCheck={setCheck} />
      <input
        className="input"
        placeholder="Create a new todo…"
        type="text"
        onKeyUpCapture={(e) => {
          if (e.key === "Enter" && e.target.value !== "") {
            let newObj = {
              id: new Date().getTime(),
              text: e.target.value,
              checked: checked,
            };
            setCheck(false);
            // fetch("http://localhost:3000/toDoList", {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify(newObj),
            // });
            localStorage.setItem("todo", JSON.stringify([...data, newObj]));
            setData([...data, newObj]);
            e.target.value = "";
          }
        }}
      />
    </div>
  );
}
