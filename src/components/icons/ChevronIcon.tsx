type ChevronIconProps = {
  isMobileNavOpen: boolean;
  gridArea: string;
};

export default function ChevronIcon({
  isMobileNavOpen,
  gridArea,
}: ChevronIconProps) {
  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${isMobileNavOpen ? "rotate-90" : "-rotate-90"} ${gridArea} icon icon-tabler icons-tabler-outline icon-tabler-chevron-right mx-auto  -translate-y-2 text-[rgb(202,28,22)] transition-all ease-out duration-500`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 6l6 6l-6 6" />
    </svg>
  );
}
