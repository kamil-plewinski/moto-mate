type ChevronIconProps = {
  gridArea: string;
};

export default function ChevronIcon({ gridArea }: ChevronIconProps) {
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
      className={`${gridArea} icon icon-tabler icons-tabler-outline icon-tabler-chevron-right mx-auto -rotate-90 -translate-y-2`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 6l6 6l-6 6" />
    </svg>
  );
}
