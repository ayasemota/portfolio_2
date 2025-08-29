import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const socials = [
    { link: "https://discord.net/", src: "/icons/discord.svg", alt: "Discord Icon" },
    { link: "https://facebook.net/", src: "/icons/facebook.svg", alt: "Facebook Icon" },
    { link: "https://dribbble.net/", src: "/icons/dribbble.svg", alt: "Dribbble Icon" },
    { link: "https://instagram.net/", src: "/icons/instagram.svg", alt: "Instagram Icon" },
    { link: "https://behance.net/", src: "/icons/behance.svg", alt: "Behance Icon" },
  ];

  return (
    <footer className="flex justify-center">
      <div className="container px-[8%]">
        <div className="w-full block h-[3px] bg-black opacity-20"></div>
        <div className="grid grid-cols-1 lg:flex justify-center md:justify-between gap-16 py-16">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-5">
              <h1 className="font-[600] text-[32px]">{"Let's work together"}</h1>
              <p>This is a template Figma file, turned into code.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {socials.map((props, index) => (
                <Link href={props.link} key={index} >
                  <Image src={props.src} alt={props.alt} width={35} height={35} />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <input type="name" placeholder="Name" className="bg-input placeholder:text-black py-5 px-8 w-[530px] max-w-[100%]" />
              <input type="email" placeholder="Email" className="bg-input placeholder:text-black py-5 px-8 w-[530px] max-w-[100%]" />
              <input type="text" placeholder="Type your message here..." className="bg-input placeholder:text-black py-5 px-8 w-[530px] max-w-[100%]" />
            </div>
            <Link href="" className="bg-black text-white text-center py-6 px-20 w-full md:w-[235px]">Submit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
