import checkIcon from "../../../../assets/icons/chacked-icon.svg";
import "./ChackBox.scss";
import classNames from "classnames";

export default function ChackBox({
  checked,
  setCheck,
  id,
  setNum,
  num,
  data,
  setData,
}) {
  return (
    <div
      className={classNames("chackBox", { isActive: checked })}
      onClick={() => {
        if (num !== undefined) {
          if (checked) {
            setNum(++num);
          } else {
            setNum(--num);
          }
        }
        if (id) {
          let newData = data.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
          );
          setData(newData);
          localStorage.setItem("todo", JSON.stringify(newData));
          // fetch(`http://localhost:3000/toDoList/${id}`, {
          //   method: "PATCH",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify({ checked: !checked }),
          // });
        }
        setCheck(!checked);
      }}
    >
      <img
        className={classNames({ isActive: checked })}
        src={checkIcon}
        alt="o"
      />
    </div>
  );
}
