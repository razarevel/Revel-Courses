import HeroBadge from "./heroBadge";
import img1 from "../../../../assets/heroGridPNG/zaiper.png";
import img2 from "../../../../assets/heroGridPNG/spotify.png";
import img3 from "../../../../assets/heroGridPNG/zoom.png";
import img4 from "../../../../assets/heroGridPNG/amazon.png";
import img5 from "../../../../assets/heroGridPNG/adobe.png";
import img6 from "../../../../assets/heroGridPNG/notion.png";
import img7 from "../../../../assets/heroGridPNG/netflix.png";

export default function HeroGrid() {
  const badge = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
  ];
  return (
    <>
      <div className="flex items-center justify-center container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-0.5 container mx-aut">
          {badge.map((el) => (
            <HeroBadge key={el.id} logo={el.img} />
          ))}
        </div>
      </div>
    </>
  );
}
