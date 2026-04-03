import { NavLink } from "react-router-dom";

type NavItemProps = {
  title: string;
  gridArea: string;
  icon: React.ReactNode;
  path: string;
};

export default function NavItemMobile({
  title,
  gridArea,
  icon,
  path,
}: NavItemProps) {
  return (
    <div className={gridArea}>
      <NavLink
        to={path}
        end={path === "/"}
        className="flex flex-col items-center justify-center w-25"
      >
        <div className="mb-2">{icon}</div>
        <p>{title}</p>
      </NavLink>
    </div>
  );
}
