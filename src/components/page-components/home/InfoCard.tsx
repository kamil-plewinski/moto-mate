type InfoCardProps = {
  cardTitle: string;
  content: number | string | undefined;
  contentStyle?: string;
};

export default function InfoCard({
  cardTitle,
  content,
  contentStyle,
}: InfoCardProps) {
  const decorLineClasses =
    "absolute bottom-0 left-0 h-3 w-full bg-linear-to-r from-[rgba(215,31,31,.8)] to-[rgba(255,77,0,.8)] z-0";

  const decorCircleOneClasses =
    "absolute -bottom-25 -right-20 w-50 h-50 bg-radial from-[rgba(255,87,0,.7)] via-[rgba(255,91,0,.2)] to-transparent rounded-full blur-2xl z-0";

  const decorCircleTwoClasses =
    "absolute bottom-0 -right-5 w-10 h-10 rounded-full bg-orange-300/80 blur-xl z-0";

  return (
    <div className="relative custom-background p-5 w-full h-38 rounded-xl rounded-tl-none shadow-lg overflow-clip">
      <h2 className="text-lg font-semibold tracking-wide">{cardTitle}</h2>
      <p className={`relative mt-9 text-lg z-10 ${contentStyle}`}>{content}</p>
      <div className={decorLineClasses}></div>
      <div className={decorCircleOneClasses}></div>
      <div className={decorCircleTwoClasses}></div>
    </div>
  );
}
