interface Props {
  title: string;
  description: string;
}
export default function SectionHeading({ title, description }: Props) {
  return (
    <div className="container mx-auto space-y-3 p-4">
      <h1 className="text-xl md:text-3xl font-semibold">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
