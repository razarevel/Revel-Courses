import mail from "../imgs/mail.png";
import phone from "../imgs/phone.png";
import pointer from "../imgs/pointer.png";
import face from "../imgs/face.png";
import twitter from "../imgs/twitter.png";
import LinkedIn from "../imgs/LinkedIn.png";
const formContext = [
  {
    id: 1,
    Icon: [{ img: mail, link: "mailto: razarevel@gmail.com" }],
    context: "razareve@gmail.com",
    type: "mail",
  },
  {
    id: 2,
    Icon: [{ img: phone, link: "" }],
    context: "+91 00000 00000",
    type: "",
  },
  {
    id: 3,
    Icon: [{ img: pointer, link: "" }],
    context: "Some Where in the Japan",
    type: "",
  },
  {
    id: 4,
    Icon: [
      {
        id: 1,
        img: face,
        link: "https://www.facebook.com/profile.php?id=100093500498917",
      },
      { id: 2, img: twitter, link: "https://twitter.com/RazaRevel" },
      {
        id: 3,
        img: LinkedIn,
        link: "https://www.linkedin.com/in/raza-revel-4241a5276/",
      },
    ],
    context: "Soial media",
    type: "",
  },
];
export default formContext;
