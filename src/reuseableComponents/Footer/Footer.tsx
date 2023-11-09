import FooterContact from "./footerContact";
import FooterContext from "./footerContext";

export default function Footer() {
  return (
    <section id="footer">
      <div className="flex flex-col md:flex-row">
        {/* First section */}
        <FooterContact />
        {/* Second section */}
        <FooterContext />
      </div>
    </section>
  );
}
