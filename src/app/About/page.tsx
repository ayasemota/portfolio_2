import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
   return (
      <>
         <Navbar />

         <section className="flex justify-center min-h-[624px] py-16 lg:py-0 bg-pink">
            <div className="flex items-center">
               <div className="container grid grid-cols-1 lg:flex justify-center md:justify-between gap-16 px-[8%] lg:px-[200px]">
                  <div className="flex flex-col gap-5">
                     <div>
                        <Image
                           src="/4ebda58f3c64694d339c43186b32c37bb1024523.jpg"
                           alt="Menu Image"
                           width={495}
                           height={424}
                           className="place-self-center border-2 border-black w-full"
                        />
                     </div>
                     <div>
                        <p><span className="block font-[600] pb-2">Pablo Designero</span> Designer & Unicorn Trainer</p>
                     </div>
                  </div>
                  <div>
                     <p><span className="block font-[600] pb-2">Bio:</span>
                        {"Father of 3 humans, 5 unicorns & 2 dogs, I design since I can remember it. I often get asked where I get my inspiration from: in everyday’s lil’ details. And sometimes in leftover food I find in my beard."}</p>
                  </div>
               </div>
            </div>
         </section>

         <section className="flex justify-center">
            <div className="flex items-center">
               <div className="container grid grid-cols-1 lg:flex flex-col justify-center md:justify-between gap-16 px-[8%] py-[120px]">
                  <div>
                     <h3 className="text-2xl leading-9 font-[500]">When I was 5, I got adbucted by a unicorn family. When they returned me to earth, I joined a designer school. But, fo’ real, what I learned with my kidnaptive family really gave an edge to my creative language.</h3>
                  </div>
                  <div className="flex flex-col gap-2">
                     <p className="p-2 bg-green text-pink">Being a human is way too complicated. Time to be a unicorn.</p>
                     <p className="p-2">Try it and you’ll see. Then your Figma files are just gonna fly in color, glitter, interactions and autolayout.</p>
                     <p className="p-2 bg-green text-pink">Also, grow a beard. Check my bio if that is not clear.</p>
                     <p className="p-2">{`Available for projects, from Monday to Tuesday, mainy between 14 and 16. (Unless there is a unicorn race on TV - DUH -in that case, come back another day).
                        Projects include, RocknRoll covers, furniture refurbishing, Unicorn potty training and more.`}</p>
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </>
   );
}