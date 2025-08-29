import Image from "next/image";

export default function Works() {
   const works = [
      { src: "/works/Image.jpg", alt: "Works 1", project: "Free Bird", author: "Lynyrd Skynyrd" },
      { src: "/works/Image-1.jpg", alt: "Works 2", project: "Purple Haze", author: "Jimi Hendrix" },
      { src: "/works/Image-2.jpg", alt: "Works 3", project: "You Really Got Me", author: "The Kinks" },
      { src: "/works/Image-3.jpg", alt: "Works 4", project: "American Girl", author: "Tom Perry" },
      { src: "/works/Image-4.jpg", alt: "Works 5", project: "Whole Lotta Love", author: "Led Zeppelin" },
      { src: "/works/Image-5.jpg", alt: "Works 6", project: "Under Pressure", author: "Queen" },
   ];

   const client = [
      { name: "Gemma Nolen, Google", src: "/author/Property=Author image_1.png", alt: "Property Authot 1" },
      { name: "Gemma Nolen, Google", src: "/author/Property=Author image_1.png", alt: "Property Authot 1" },
      { name: "Gemma Nolen, Google", src: "/author/Property=Author image_1.png", alt: "Property Authot 1" }
   ]

   return (
      <>
         <section className="flex justify-center">
            <div className="container px-[8%]">
               <h1 className="text-center font-[600] text-3xl py-5">My Latest Works</h1>
               <div className="flex flex-wrap justify-center lg:justify-between py-16 gap-10">
                  {works.map((props, index) => (
                     <div className="flex flex-col gap-10 w-[315px]" key={index}>
                        <Image src={props.src} alt={props.alt} width={315} height={315} />
                        <div className="flex flex-col gap-4">
                           <h2 className="font-[600] text-xl">{props.project}</h2>
                           <p>{props.author}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <section className="flex justify-center">
            <div className="container px-[8%]">
               <h1 className="text-center font-[600] text-3xl py-5">Clients</h1>
               <div className="grid grid-cols-1 lg:flex justify-items-center lg:justify-between py-16 gap-10">
                  {client.map((props, index) => (
                     <div className="flex flex-col justify-between gap-10 w-[315px] h-[290px] p-7 bg-[#FFFCF5] border-2 border-[#FFD285]" key={index}>
                        <p className="font-[600] text-[20px]">This is a template Figma file, turned into code.</p>
                        <div className="flex gap-5">
                           <div>
                              <Image src={props.src} alt={props.alt} height={50} width={50} />
                           </div>
                           <div className="flex flex-col gap-2">
                              <div className="flex gap-1">
                                 <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.10326 2.62387C9.47008 1.88062 10.5299 1.88062 10.8967 2.62387L12.7063 6.29036C12.8519 6.5855 13.1335 6.79007 13.4592 6.8374L17.5054 7.42535C18.3256 7.54453 18.6531 8.55251 18.0596 9.13104L15.1318 11.985C14.8961 12.2147 14.7885 12.5457 14.8442 12.8701L15.5353 16.9C15.6754 17.7169 14.818 18.3399 14.0844 17.9542L10.4653 16.0515C10.174 15.8984 9.82598 15.8984 9.53466 16.0515L5.91562 17.9542C5.18199 18.3399 4.32456 17.7169 4.46467 16.9L5.15585 12.8701C5.21148 12.5457 5.10393 12.2147 4.86825 11.985L1.94038 9.13104C1.34687 8.55251 1.67438 7.54453 2.4946 7.42535L6.54081 6.8374C6.86652 6.79007 7.14808 6.5855 7.29374 6.29036L9.10326 2.62387Z" fill="#2D2D2D" />
                                 </svg>
                                 <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.10326 2.62387C9.47008 1.88062 10.5299 1.88062 10.8967 2.62387L12.7063 6.29036C12.8519 6.5855 13.1335 6.79007 13.4592 6.8374L17.5054 7.42535C18.3256 7.54453 18.6531 8.55251 18.0596 9.13104L15.1318 11.985C14.8961 12.2147 14.7885 12.5457 14.8442 12.8701L15.5353 16.9C15.6754 17.7169 14.818 18.3399 14.0844 17.9542L10.4653 16.0515C10.174 15.8984 9.82598 15.8984 9.53466 16.0515L5.91562 17.9542C5.18199 18.3399 4.32456 17.7169 4.46467 16.9L5.15585 12.8701C5.21148 12.5457 5.10393 12.2147 4.86825 11.985L1.94038 9.13104C1.34687 8.55251 1.67438 7.54453 2.4946 7.42535L6.54081 6.8374C6.86652 6.79007 7.14808 6.5855 7.29374 6.29036L9.10326 2.62387Z" fill="#2D2D2D" />
                                 </svg>
                                 <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.10326 2.62387C9.47008 1.88062 10.5299 1.88062 10.8967 2.62387L12.7063 6.29036C12.8519 6.5855 13.1335 6.79007 13.4592 6.8374L17.5054 7.42535C18.3256 7.54453 18.6531 8.55251 18.0596 9.13104L15.1318 11.985C14.8961 12.2147 14.7885 12.5457 14.8442 12.8701L15.5353 16.9C15.6754 17.7169 14.818 18.3399 14.0844 17.9542L10.4653 16.0515C10.174 15.8984 9.82598 15.8984 9.53466 16.0515L5.91562 17.9542C5.18199 18.3399 4.32456 17.7169 4.46467 16.9L5.15585 12.8701C5.21148 12.5457 5.10393 12.2147 4.86825 11.985L1.94038 9.13104C1.34687 8.55251 1.67438 7.54453 2.4946 7.42535L6.54081 6.8374C6.86652 6.79007 7.14808 6.5855 7.29374 6.29036L9.10326 2.62387Z" fill="#2D2D2D" />
                                 </svg>
                                 <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.10326 2.62387C9.47008 1.88062 10.5299 1.88062 10.8967 2.62387L12.7063 6.29036C12.8519 6.5855 13.1335 6.79007 13.4592 6.8374L17.5054 7.42535C18.3256 7.54453 18.6531 8.55251 18.0596 9.13104L15.1318 11.985C14.8961 12.2147 14.7885 12.5457 14.8442 12.8701L15.5353 16.9C15.6754 17.7169 14.818 18.3399 14.0844 17.9542L10.4653 16.0515C10.174 15.8984 9.82598 15.8984 9.53466 16.0515L5.91562 17.9542C5.18199 18.3399 4.32456 17.7169 4.46467 16.9L5.15585 12.8701C5.21148 12.5457 5.10393 12.2147 4.86825 11.985L1.94038 9.13104C1.34687 8.55251 1.67438 7.54453 2.4946 7.42535L6.54081 6.8374C6.86652 6.79007 7.14808 6.5855 7.29374 6.29036L9.10326 2.62387Z" fill="#2D2D2D" />
                                 </svg>
                                 <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.10326 2.62387C9.47008 1.88062 10.5299 1.88062 10.8967 2.62387L12.7063 6.29036C12.8519 6.5855 13.1335 6.79007 13.4592 6.8374L17.5054 7.42535C18.3256 7.54453 18.6531 8.55251 18.0596 9.13104L15.1318 11.985C14.8961 12.2147 14.7885 12.5457 14.8442 12.8701L15.5353 16.9C15.6754 17.7169 14.818 18.3399 14.0844 17.9542L10.4653 16.0515C10.174 15.8984 9.82598 15.8984 9.53466 16.0515L5.91562 17.9542C5.18199 18.3399 4.32456 17.7169 4.46467 16.9L5.15585 12.8701C5.21148 12.5457 5.10393 12.2147 4.86825 11.985L1.94038 9.13104C1.34687 8.55251 1.67438 7.54453 2.4946 7.42535L6.54081 6.8374C6.86652 6.79007 7.14808 6.5855 7.29374 6.29036L9.10326 2.62387Z" fill="#2D2D2D" />
                                 </svg>
                              </div>
                              <p>{props.name}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </>
   );
}