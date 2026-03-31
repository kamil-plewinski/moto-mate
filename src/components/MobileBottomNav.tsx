import AddVehicleIcon from "./icons/AddVehicleIcon";
import ChevronIcon from "./icons/ChevronIcon";
import HomeIcon from "./icons/HomeIcon";
import MyVehiclesIcon from "./icons/MyVehiclesIcon";
import NavItem from "./NavItem";

type NavItemsConfig = {
  title: string;
  icon: React.ReactNode;
};

export default function MobileBottomNav() {
  const NavItems: NavItemsConfig[] = [
    { title: "Przegląd", icon: <HomeIcon /> },
    { title: "Dodaj Pojazd", icon: <AddVehicleIcon /> },
    { title: "Moje pojazdy", icon: <MyVehiclesIcon /> },
  ];

  const renderedItems = NavItems.map((item) => {
    return <NavItem title={item.title} icon={item.icon} />;
  });

  return (
    <div className="fixed bottom-0 custom-background w-full h-full max-h-44 border-t-2  text-center lg:hidden">
      <ChevronIcon />
      <div className="flex items-center justify-around mt-6">{renderedItems}</div>
    </div>
  );
}
