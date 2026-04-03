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

  const renderedItems = navItems.map((item) => {
    return (
      <NavItemMobile
        key={item.title}
        title={item.title}
        icon={item.icon}
        gridArea={item.gridArea}
        path={item.path}
      />
    );
  });

  return (
    <div className="fixed bottom-0 pt-3 custom-background w-full h-full max-h-72 border-t  text-center lg:hidden">
      <div className="grid grid-cols-3 grid-rows-2 place-items-center gap-y-8">
        <ChevronIcon gridArea="col-2 row-1 self-start" />
        {renderedItems}
      </div>
    </div>
  );
}
