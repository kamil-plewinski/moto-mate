type AddVehicleBtnProps = {
  name: string;
  buttonType: "car" | "motorcycle";
  onClick: () => void;
};

export default function AddVehicleBtn({
  name,
  onClick,
  buttonType,
}: AddVehicleBtnProps) {
  return (
    <button
      type="button"
      aria-label={name}
      onClick={onClick}
      className="relative group w-full max-w-175 h-55 shadow-md rounded-md cursor-pointer overflow-hidden md:h-60 lg:max-w-90 xl:max-w-120 lg:h-150"
    >
      <img
        src={`${buttonType === "car" ? "/img/lakeblog-automobile-7152396_1280.jpg" : "/img/phillipcspence-motorcycle-5026152_1280.jpg"}`}
        alt={name}
        className="w-full h-full object-cover object-[40%_75%] 
        group-hover:scale-105 group-hover:object-[35%_75%] transition-all duration-200"
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,.3)]  font-semibold uppercase hover:bg-linear-to-tr group-hover:from-[rgba(153,52,52,.15)] group-hover:to-[rgba(215,31,31,.45)] group-hover:backdrop-blur-xs transition-colors duration-200">
        <p className="absolute top-0 mt-16 ml-10 text-xl text-shadow-lg md:text-2xl">
          {name}
        </p>
      </div>
    </button>
  );
}
