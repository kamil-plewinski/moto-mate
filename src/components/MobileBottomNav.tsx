import { useState } from "react";
import AddVehicleIcon from "./icons/AddVehicleIcon";
import ChevronIcon from "./icons/ChevronIcon";
import HomeIcon from "./icons/HomeIcon";
import MyVehiclesIcon from "./icons/MyVehiclesIcon";
import NavItemMobile from "./NavItemMobile";

type NavItemsConfig = {
  title: string;
  gridArea: string;
  icon: React.ReactNode;
  path: string;
};

export default function MobileBottomNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const navItems: NavItemsConfig[] = [
    {
      title: "Przegląd",
      icon: <HomeIcon />,
      gridArea: "col-1 row-1",
      path: "/",
    },
    {
      title: "Dodaj Pojazd",
      icon: <AddVehicleIcon />,
      gridArea: "col-3 row-1",
      path: "/add-vehicle",
    },
    {
      title: "Moje pojazdy",
      icon: <MyVehiclesIcon />,
      gridArea: "col-1 row-2",
      path: "/my-vehicles",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileNavOpen(false);
  };

  const renderedItems = navItems.map((item) => {
    return (
      <NavItemMobile
        key={item.title}
        title={item.title}
        icon={item.icon}
        gridArea={item.gridArea}
        path={item.path}
        onClick={closeMobileMenu}
      />
    );
  });

  return (
    <nav
      className={`${isMobileNavOpen ? "max-h-50" : "max-h-22"} fixed bottom-0 pt-3 custom-background w-full h-full text-center shadow-[0_-4px_8px_rgba(135,52,52,0.45)] transition-all ease-out duration-500 lg:hidden`}
    >
      <div className="grid grid-cols-3 grid-rows-2 place-items-center gap-y-8">
        <button onClick={toggleMobileMenu} className="cursor-pointer">
          <ChevronIcon
            isMobileNavOpen={isMobileNavOpen}
            gridArea="col-2 row-1 self-start"
          />
        </button>
        {renderedItems}
      </div>
    </nav>
  );
}
