import { useState } from "react";
import classNames from "classnames";
import ChackBox from "../../../ChackBox/ChackBox";
import DeleteIcon from "./DeleteIcon/DeleteIcon";
import "./ListItem.scss";

export default function ListItem({
  id,
  check,
  text,
  num,
  setNum,
  setData,
  data,
}) {
  let [checked, setCheck] = useState(check);

  return (
    <div className="toDoBox" key={id}>
      <ChackBox
        id={id}
        checked={checked}
        setCheck={setCheck}
        setNum={setNum}
        num={num}
        setData={setData}
        data={data}
      />
      <p className={classNames("textToDo", { isCheck: checked })}>{text}</p>
      <DeleteIcon id={id} setData={setData} data={data} />
    </div>
  );
}
