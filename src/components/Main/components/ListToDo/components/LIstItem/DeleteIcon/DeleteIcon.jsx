export default function DeleteIcon({ setData, data, id }) {
  return (
    <div
      className="delete"
      onClick={() => {
        let newData = data.filter((item) => item.id !== id);
        setData(newData);
        localStorage.setItem("todo", JSON.stringify(newData));
        // fetch(`http://localhost:3000/toDoList/${id}`, {
        //   method: "DELETE",
        // });
      }}
    >
      <div className="rotate-45 chaka"></div>
      <div className="chaka rotate-[-45deg]"></div>
    </div>
  );
}
