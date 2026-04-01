import AddVehicleIcon from "./icons/AddVehicleIcon";
import ChevronIcon from "./icons/ChevronIcon";
import HomeIcon from "./icons/HomeIcon";
import MyVehiclesIcon from "./icons/MyVehiclesIcon";
import NavItemMobile from "./NavItemMobile";

type NavItemsConfig = {
  title: string;
  gridArea: string;
  icon: React.ReactNode;
};

export default function MobileBottomNav() {
  const navItems: NavItemsConfig[] = [
    {
      title: "Przegląd",
      icon: <HomeIcon />,
      gridArea: "col-1 row-1",
    },
    {
      title: "Dodaj Pojazd",
      icon: <AddVehicleIcon />,
      gridArea: "col-3 row-1",
    },
    {
      title: "Moje pojazdy",
      icon: <MyVehiclesIcon />,
      gridArea: "col-1 row-2",
    },
  ];

  const renderedItems = navItems.map((item) => {
    return (
      <NavItemMobile
        key={item.title}
        title={item.title}
        icon={item.icon}
        gridArea={item.gridArea}
      />
    );
  });

  return (
    <div className="fixed bottom-0 pt-3 custom-background w-full h-full max-h-22 border-t  text-center lg:hidden">
      <div className="grid grid-cols-3 grid-rows-2 place-items-center gap-y-8">
        <ChevronIcon gridArea="col-2 row-1 self-start" />
        {renderedItems}
      </div>
    </div>
  );
}
