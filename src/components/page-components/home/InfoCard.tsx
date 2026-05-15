type InfoCardProps = {
  cardTitle: string;
  content: number | string | undefined;
};

export default function InfoCard({ cardTitle, content }: InfoCardProps) {
  return (
    <div className="custom-background w-full h-34">
      <h2>{cardTitle}</h2>
      <p>{`${content}`}</p>
    </div>
  );
}
