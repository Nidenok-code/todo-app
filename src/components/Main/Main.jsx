import { useState, useEffect } from "react";
import Input from "./components/Input/Input";
import ListToDo from "./components/ListToDo/ListToDo";
import "./main.scss";

export default function Main() {
  let [data, setData] = useState([]);

  useEffect(() => {

    // fetch("http://localhost:3000/toDoList")
    //   .then((res) => res.json())
    //   .then((resData) => setData(resData));

    if (localStorage.getItem("todo")) {
      setData(JSON.parse(localStorage.getItem("todo")));
    } else {
      localStorage.setItem("todo", JSON.stringify(data));
    }
  }, []);

  return (
    <main className="main">
      <Input data={data} setData={setData} />
      <ListToDo data={data} setData={setData} />
    </main>
  );
}
