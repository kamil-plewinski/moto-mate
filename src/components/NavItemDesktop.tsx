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
      <NavLink
        to={path}
        end={path === "/"}
        className={({ isActive }) => {
          const baseClasses = `flex relative group items-center justify-start mb-6 py-4 px-2 w-full bg-transparent text-[#ddd] rounded-xl xl:px-4 transition-colors duration-300 ease-out overflow-hidden`;

          const activeClasses = `hover:text-white hover:bg-linear-to-r hover:from-[#993434] hover:to-[#D71F1F] hover:border-transparent  ${isActive ? "bg-linear-to-r from-[#993434] to-[#D71F1F] text-white" : ""}`;

          const beforeClasses = `before:content-[""] before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:bg-[rgba(221,221,221,.3)] ${isActive ? "before:hidden" : "before:block"} hover:before:scale-x-0 hover:before:opacity-0 before:transition-transform before:duration-300 before:ease-out`;

          const afterClasses = `after:content-[""] after:absolute after:left-0 after:h-full after:w-2 after:bg-[#EC1B15] ${isActive ? "after:opacity-100" : "after:opacity-0"} hover:after:opacity-100 after:transition-opacity after:duration-300 after:ease-out`;

          return `${baseClasses} ${activeClasses} ${beforeClasses} ${afterClasses}`;
        }}
      >
        <span className="mr-[.5em] xl:mr-[2em]">{icon}</span>
        <span>{title}</span>
      </NavLink>

  );
}
