import { Link } from "react-router-dom";

type NavItemProps = {
  title: string;
  gridArea: string;
  icon: React.ReactNode;
};

export default function NavItemMobile({ title, gridArea, icon }: NavItemProps) {
  return (
    <div className={gridArea}>
      <Link to="" className="flex flex-col items-center justify-center w-25">
        <div className="mb-2">{icon}</div>
        <p>{title}</p>
      </Link>
    </div>
  );
}
