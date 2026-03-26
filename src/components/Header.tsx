import { Link } from "react-router-dom";
import LogoIcon from "./icons/LogoIcon";

export default function Header() {
  return (
    <header className="flex items-center w-full bg-gray-500">
      <Link to="/">
        <LogoIcon />
      </Link>
    </header>
  );
}
