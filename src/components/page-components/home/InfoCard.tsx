type InfoCardProps = {
  cardTitle: string;
};

export default function InfoCard({ cardTitle }: InfoCardProps) {
  return (
    <div className="custom-background w-full h-34">
      <h2>{cardTitle}</h2>
    </div>
  );
}
