type AddVehicleBtnProps = {
  name: string;
};

export default function AddVehicleBtn({ name }: AddVehicleBtnProps) {
  return (
    <button
      type="button"
      className="w-full max-w-175 h-45 bg-red-300 cursor-pointer md:h-60 lg:max-w-120 lg:h-150"
    >
      {name}
    </button>
  );
}
