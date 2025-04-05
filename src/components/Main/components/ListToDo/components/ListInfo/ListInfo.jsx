import classNames from "classnames";
import "./listInfo.scss";

export default function ListInfo({
  numOfItems,
  filter,
  setFilter,
  data,
  setData,
}) {
  let filters = ["All", "Active", "Completed"];
  return (
    <div className="listInfo">
      <div>{numOfItems} items left</div>
      <ul className="filter">
        {filters.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => setFilter(item)}
              className={classNames("font-bold textHover", {
                chosed: item === filter,
              })}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => {
          let arr = [];
          setData(() =>
            data.filter((item) => {
              if (item.checked) {
                return false;
              }
              arr.push(item);
              return true;
            })
          );
          localStorage.setItem("todo", JSON.stringify(arr));
          // arr.forEach((item) =>
          //   fetch(`http://localhost:3000/toDoList/${item}`, {
          //     method: "delete",
          //   })
          // );
        }}
        className="textHover"
      >
        Clear Completed
      </div>
    </div>
  );
}
