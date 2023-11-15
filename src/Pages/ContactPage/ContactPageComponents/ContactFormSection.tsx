import ContactFormCards from "./ContactFormCards";
import ContactForms from "./ContactForms";

export default function ContactFormSection() {
  return (
    <div className="w-full px-4 mb-20">
      <div
        className="p-10 bg-white w-full flex flex-col  justify-center space-y-10 container mx-auto
        lg:flex-row lg:space-y-0 lg:justify-between lg:space-x-24 xl:space-x-32"
      >
        {/* Form */}
        <ContactForms />
        {/* Contact Icons */}
        <ContactFormCards />
      </div>
    </div>
  );
}
