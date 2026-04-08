import HomeIcon from "./icons/HomeIcon";
import AddVehicleIcon from "./icons/AddVehicleIcon";
import MyVehiclesIcon from "./icons/MyVehiclesIcon";
import NavItemDesktop from "./NavItemDesktop";

type DesktopNavItemsConfig = {
  title: string;
  icon: React.ReactNode;
  path: string;
};

export default function SideBar() {
  const desktopNavItems: DesktopNavItemsConfig[] = [
    {
      title: "Przegląd",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      title: "Dodaj Pojazd",
      icon: <AddVehicleIcon />,
      path: "/add-vehicle",
    },
    {
      title: "Moje pojazdy",
      icon: <MyVehiclesIcon />,
      path: "/my-vehicles",
    },
  ];

  const renderedDesktopNavItems = desktopNavItems.map((item) => {
    return (
      <NavItemDesktop
        key={item.title}
        title={item.title}
        icon={item.icon}
        path={item.path}
      />
    );
  });

  return (
    <nav className="hidden py-10 px-2 custom-background w-full h-full lg:row-[1/_span_3] lg:flex lg:flex-col xl:px-5 2xl:px-10">
      {renderedDesktopNavItems}
    </nav>
  );
}
