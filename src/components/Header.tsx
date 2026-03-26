import LogoIcon from "./icons/LogoIcon";

export default function Header() {
  return (
    <header className="flex items-center w-full bg-gray-500">
      <LogoIcon />
      <h1 className="pl-[2em] text-xl">MotoMate</h1>
    </header>
  );
}
