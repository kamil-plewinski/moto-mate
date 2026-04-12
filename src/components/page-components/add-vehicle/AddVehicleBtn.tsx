type AddVehicleBtnProps = {
  name: string;
  onClick: () => void;
};

export default function AddVehicleBtn({ name, onClick }: AddVehicleBtnProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full max-w-175 h-45 bg-red-300 cursor-pointer md:h-60 lg:max-w-120 lg:h-150"
    >
      {name}
    </button>
  );
}
