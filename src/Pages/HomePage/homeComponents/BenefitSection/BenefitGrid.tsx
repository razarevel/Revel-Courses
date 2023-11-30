import { useEffect, useState } from "react";
import BenefitCart from "./BenefitCard";
import axios from "axios";
interface Props {
  showAll: boolean;
}
interface data {
  description: string;
  number: string;
  title: string;
  _id: any;
}
export default function BenefitGrid({ showAll }: Props) {
  const [data, setData] = useState<data[]>([]);
  useEffect(() => {
    axios.get("http://localhost:3001/api/benefits").then((res) => {
      setData(res.data.data.benefit);
    });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((el, index) =>
        (el && showAll) || index < 6 ? (
          <BenefitCart
            key={el._id}
            number={el.number}
            title={el.title}
            description={el.description}
          />
        ) : null
      )}
    </div>
  );
}
