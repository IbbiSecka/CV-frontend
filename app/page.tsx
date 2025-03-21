"use client";
import InfoSection from "@/components/infoSections";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn,  } from "react-icons/fa";

type GreetingType = {
  greeting: string;
  text: string;
};

export default function Home() {
  
const [greeting, setGreeting]  = useState<GreetingType>({greeting: "", text: ""}); ;

useEffect(() => {
  const greetings = [
    {
      greeting: "Good morning ☀️ ",
      text: "Grab a coffee! ☕️"
    },
    { greeting: "Good afternoon Champ 🏆", text: "Keep pushing forward! 💪" },
    { greeting: "Good evening !", text: "Relax and unwind! 🌆" },
    { greeting: "Good night 🌛", text: "Time for a Good night's sleep 😴(After checking out my website 😁)" },
    { greeting: "Wow, you're up early (or late?) ", text: "Go back to sleep? 😅"}
  ];
  
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour <= 2) return greetings[3];
    if (hour > 2 && hour < 6) return greetings[4];
    if (hour >= 6 && hour < 12) return greetings[0];
    if (hour >= 12 && hour < 18) return greetings[1];
    return greetings[2];
  };

  setGreeting(getGreeting());
}, []);

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen px-4 mt-auto">
      {/* Main Container */}
      <div className="relative flex flex-col md:flex-row items-center  text-gray-900  p-8 max-w-3xl w-full">
        
        {/*  Left Section - Profile Card bg-[#efe6dc] */}
        <div className="bg-[#f7f2ee] rounded-sm border-[#0000] shadow-2xl pt-6  flex flex-col items-center w-[280px] h-[375px] relative">
          {/* Profile Image */}
          <div className="w-28 h-28 border-neutral-200 rounded-full overflow-hidden border   shadow-md relative">
            <Image 
              src="/images/ibbiimg.jpg" 
              alt="Profile" 
              
              layout="fill" 
              objectFit="cover" 
              className="rounded-full"
            />
          </div>

          {/* Name & Title */}
          
          <h3 className="  text-[#000000] flex justify-center w-1 p-6 mt-4 text-2xl font-extrabold font-garamond text-center ">Ibrahima Secka</h3>
          <p  className=" text-[#000000] p-6 tracking-widest  font-lato mt-2 text">Software Developer</p>

          
          
          {/* Social Icons */}
          <div className="mt-auto w-full h-8 bg-white   flex  gap-4 p-2 justify-center">
            <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://www.linkedin.com/in/ibrahimasecka/?locale=no_NO" 
            className="text-black hover:text-[#cbc3bd]  transition">
              
              <FaLinkedinIn />
              
            </a>
            <a 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://github.com/IbbiSecka" className="text-black hover:text-[#cbc3bd] transition">
              <FaGithub />
            </a>
            
           
          </div>
        </div>

        {/* Right Section - Text & Buttons */}
        <div className="pt-4 flex flex-col justify-center w-[300px] text-center md:text-left mt-6 md:mt-0 md:ml-8">
          <h2 className="text-5xl font-bold font-montserrat text-black">{greeting.greeting}</h2>
          <p className="text-lg font-roboto mt-2 text-black">{greeting.text}</p>

          {/* Buttons */}
          <div className="Buttons: flex justify-center text-[#d4a373]  mt-6   gap-4">
            <a href="#resume" className=" bg-[#f7f2ee]  text-black px-5 py-2 rounded-lg font-semibold hover:bg-orange-50 hover:text-[#31185a] transition">
              Resume
            </a>
            <a href="#projects" className="bg-[#f7f2ee]  text-black px-5 py-2 rounded-lg font-semibold hover:bg-orange-50 hover:text-[#31185a] transition">
              Projects
            </a>
          </div>

          {/* Extra Paragraph Text */}
          <div className=" Paragraph-Text: text-sm text-black mt-2 font-roboto">
            <p className="mt-4 ">
            I'm a paragraph. Information (and fun facts), will appear here in the near future!.
            
          </p>
          <p className="">
            If you like Game of Thrones, then this fun fact would make you laugh.
          </p>
          </div>
          
        </div>

      </div>
      <InfoSection/>
    </div>
  );
}
