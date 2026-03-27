import { Link } from "react-router-dom";
import LogoIcon from "./icons/LogoIcon";

export default function Header() {
  return (
    <header className="flex items-center p-2 w-full rounded-b-[20px] md:rounded-b-none md:rounded-t-[20px] custom-background">
      <Link to="/">
        <LogoIcon />
      </Link>
    </header>
  );
}
