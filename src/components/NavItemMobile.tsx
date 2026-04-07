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
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-25 transition-all duration-300  ${isActive ? "text-[rgb(202,28,22)] drop-shadow-[0px_3px_5px_rgba(153,52,52,0.9)] scale-105" : "text-[rgba(221,221,221,.8)] scale-100"}`
        }
      >
        <div className="mb-2">{icon}</div>
        <p>{title}</p>
      </NavLink>
    </div>
  );
}
