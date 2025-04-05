import Theme from "./Theme/Theme";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">todo</h1>
      <Theme />
    </header>
  );
}
