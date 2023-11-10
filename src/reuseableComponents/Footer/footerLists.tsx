export default function Footerlists() {
  return (
    <>
      <div className="flex space-x-6 gap-8">
        {/* Home List */}
        <div className="flex flex-col space-y-3">
          <h1 className="text-xl font-[550]">Home</h1>
          <div className="flex flex-col space-y-1">
            <p className="opacity-80">Benefits</p>
            <p className="opacity-80">Our Courses</p>
            <p className="opacity-80">Our testimonials</p>
            <p className="opacity-80">Our FAQ</p>
          </div>
        </div>
        {/* About list */}
        <div className="flex flex-col space-y-3">
          <h1 className="text-xl font-[550]">About Us</h1>
          <div className="flex flex-col space-y-1">
            <p className="opacity-80">Company</p>
            <p className="opacity-80">Achievements</p>
            <p className="opacity-80">Our Goals</p>
          </div>
        </div>
      </div>
    </>
  );
}
