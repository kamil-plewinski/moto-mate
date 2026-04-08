import { NavLink } from "react-router-dom";

type NavItemDesktopProps = {
  title: string;
  icon: React.ReactNode;
  path: string;
};

export default function NavItemDesktop({
  title,
  icon,
  path,
}: NavItemDesktopProps) {
  return (
    <NavLink to={path} end={path === "/"}>
      <div>{icon}</div>
      <p>{title}</p>
    </NavLink>
  );
}
