import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function FooterProfiles() {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-xl font-[550]">Social Profiles</h1>
      <div className="flex space-x-4">
        <a
          href="https://www.facebook.com/profile.php?id=100093500498917"
          target="_blank"
          className="bg-slate-100 w-11 h-11 flex items-center justify-center rounded-md duration-300 hover:bg-yellow-400"
        >
          <BsFacebook size="20" />
        </a>
        <a
          href="https://twitter.com/RazaRevel"
          target="_blank"
          className="bg-slate-100 w-11 h-11 flex items-center justify-center rounded-md duration-300 hover:bg-yellow-400"
        >
          <BsTwitter size="20" />
        </a>
        <a
          href="https://www.linkedin.com/in/raza-revel-4241a5276/"
          target="_blank"
          className="bg-slate-100 w-11 h-11 flex items-center justify-center rounded-md duration-300 hover:bg-yellow-400"
        >
          <BsLinkedin size="20" />
        </a>
      </div>
    </div>
  );
}
