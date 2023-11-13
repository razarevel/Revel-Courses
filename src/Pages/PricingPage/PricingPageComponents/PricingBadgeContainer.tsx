export default function PricingBadgeContainer() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex bg-white p-2 cursor-pointer">
        <div className="py-2 rounded-md bg-[#FF9500] text-white  text-center w-[100px]">
          Monthly
        </div>
        <div className="py-2  text-center w-[100px]">Yearly</div>
      </div>
    </div>
  );
}
