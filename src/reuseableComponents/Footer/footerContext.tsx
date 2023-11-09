import FooterProfiles from "./FooterProfiles";
import Footerlists from "./footerLists";

export default function FooterContext() {
  return (
    <>
      <div className="flex flex-col md:flex-row space-y-6">
        <Footerlists />
        <FooterProfiles />
      </div>
    </>
  );
}
