import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Works from "@/components/Works";
import Image from "next/image";

export default function Home() {
  const icons = [
    { src: "/icons/behance.svg", alt: "Behance Icon", width: 54 },
    { src: "/icons/google.svg", alt: "Google Icon", width: 183 },
    { src: "/icons/Apple.svg", alt: "Apple Icon", width: 38 },
    { src: "/icons/Dribbble_1.svg", alt: "Dribbble_1 Icon", width: 140 },
    { src: "/icons/Awwwards.svg", alt: "Awwwards Icon", width: 214 },
  ];

  const property = [
    { src: "/property/Property=Image placeholder_1.png", alt: "Property 1", heading: "Product design" },
    { src: "/property/Property=Image placeholder_1.png", alt: "Property 1", heading: "Product design" },
    { src: "/property/Property=Image placeholder_1.png", alt: "Property 1", heading: "Product design" }
  ];

  return (
    <>
      <Navbar />
      <section className="flex justify-center min-h-[624px] py-16 lg:py-0">
        <div className="container grid grid-cols-1 lg:flex justify-center md:justify-between items-center gap-16 px-[8%]">
          <div className="flex flex-col gap-6 md:gap-10 text-center lg:text-start">
            <p className="text-xl font-[600]">Branding | Image making</p>
            <h1 className="text-4xl md:text-7xl font-[600]">
              My awesome portfolio
            </h1>
            <p>And I made it myself! Yes. In Figma!</p>
          </div>
          <div>
            <Image
              src="/1b00c47ef046255e030c6eb7c1be703ce950efd3.jpg"
              alt="Menu Image"
              width={495}
              height={424}
              className="place-self-center"
            />
          </div>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="container px-[8%]">
          <div className="w-full block h-[3px] bg-black opacity-20"></div>
          <div className="grid grid-col-1 md:flex flex-wrap gap-12 justify-center md:justify-between items-center py-16">
            {icons.map((props, index) => (
              <div key={index} className="flex justify-center">
                <Image src={props.src} alt={props.alt} width={props.width} height={34} />
              </div>
            ))}
          </div>
          <div className="w-full block h-[3px] bg-black opacity-20"></div>
        </div>
      </section>

      <section className="flex justify-center">
        <div className="container px-[8%]">
          <div className="flex flex-wrap justify-center lg:justify-between py-[140px] gap-10">
            {property.map((props, index) => (
              <div className="flex flex-col items-center gap-14 text-center w-[250px]" key={index}>
                <Image src={props.src} alt={props.alt} width={130} height={130} />
                <div className="flex flex-col gap-5">
                  <h2 className="font-[600] text-2xl">{props.heading}</h2>
                  <p>This is a template Figma file, turned into code.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Works />
      <Footer />
    </>
  );
}
