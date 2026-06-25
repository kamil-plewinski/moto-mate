type VehicleSelectorChevronProps = {
  isDropdownOpen: boolean;
};

export default function VehicleSelectorChevron({
  isDropdownOpen,
}: VehicleSelectorChevronProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={`lucide lucide-chevron-up-icon lucide-chevron-up ${isDropdownOpen ? "rotate-0" : "-rotate-180"} transition-transform duration-200`}
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}
