import { Link } from "react-router-dom";

type NavItemProps = {
  title: string;
  icon: React.ReactNode;
};

export default function NavItem({ title, icon }: NavItemProps) {
  return (
    <Link to="" className="flex flex-col items-center justify-center w-25">
      <div className="mb-2">{icon}</div>
      <p>{title}</p>
    </Link>
  );
}
