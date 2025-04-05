import { useEffect, useState } from "react";
import ListInfo from "./components/ListInfo/ListInfo";
import ListItem from "./components/LIstItem/ListItem";

export default function ListToDo({ data, setData }) {
  let [filter, setFilter] = useState("All");
  let [num, setNum] = useState(0);
  useEffect(() => {
    let newNum = data?.filter((item) => !item.checked).length;
    setNum(newNum);
  }, [data]);

  return (
    <div className="bg-[--bg-box] shadow-[0px_35px_50px_-15px_var(--box-shadow)] rounded-[5px] mb-16">
      {data
        ?.filter((item) => {
          if (filter === "Active") {
            return !item.checked;
          } else if (filter === "Completed") {
            return item.checked;
          }
          return true;
        })
        .map((items) => {
          return (
            <ListItem
              setNum={setNum}
              num={num}
              key={items.id}
              id={items.id}
              check={items.checked}
              text={items.text}
              setData={setData}
              data={data}
            />
          );
        }).reverse()}
      <ListInfo
        numOfItems={num}
        data={data}
        filter={filter}
        setFilter={setFilter}
        setData={setData}
      />
    </div>
  );
}
