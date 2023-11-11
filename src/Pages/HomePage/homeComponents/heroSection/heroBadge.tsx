interface Props {
  logo: string;
}
export default function HeroBadge({ logo }: Props) {
  return (
    <div className=" bg-white px-5 py-5 flex items-center justify-center">
      <img src={logo} alt="" />
    </div>
  );
}
