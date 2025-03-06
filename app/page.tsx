import Image from "next/image";
import { FaFacebookF, FaGithub, FaLinkedinIn,  } from "react-icons/fa";


<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"/>

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      {/* Main Container */}
      <div className="relative flex flex-col md:flex-row items-center  text-gray-900  p-8 max-w-3xl w-full">
        
        {/* Left Section - Profile Card */}
        <div className="bg-[#8b81ad] border-2 border-[#1e1226] shadow-2xl pt-6  flex flex-col items-center w-[280px] h-[375px] relative">
          {/* Profile Image */}
          <div className="w-28 h-28 rounded-full overflow-hidden border  border-[#1e1226] shadow-md relative">
            <Image 
              src="/images/ibbiimg.jpg" 
              alt="Profile" 
              
              layout="fill" 
              objectFit="cover" 
              className="rounded-full"
            />
          </div>

          {/* Name & Title */}
          <h3 className="p-6 mt-4 text-2xl font-extrabold font-garamond text-center">Ibrahima Secka</h3>
          <p  className="p-6 tracking-widest text-gray-600 font-lato mt-2 text">Software Developer</p>

          {/* Social Icons */}
          <div className="mt-auto w-full h-8 bg-orange-50 border-2 border-[#1e1226] flex  gap-4 p-2 justify-center">
            <a
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://www.linkedin.com/in/ibrahimasecka/?locale=no_NO" className="text-[#4b2285] hover:text-[#31185a] transition">
              <FaLinkedinIn />
              
            </a>
            <a 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://github.com/IbbiSecka" className="text-[#4b2285] hover:text-[#31185a] transition">
              <FaGithub />
            </a>
            
           
          </div>
        </div>

        {/* Right Section - Text & Buttons */}
        <div className="pt-4 flex flex-col justify-center w-[300px] text-center md:text-left mt-6 md:mt-0 md:ml-8">
          <h2 className="text-6xl font-bold font-montserrat text-[#4b2285]">Hello</h2>
          <p className="text-lg font-roboto mt-2 text-gray-700">Here's who I am & what I do</p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-4">
            <a href="/resume" className=" bg-[#4b2285] text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-50 hover:text-[#31185a] transition">
              Resume
            </a>
            <a href="/projects" className="bg-[#4b2285] text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-50 hover:text-[#31185a] transition">
              Projects
            </a>
          </div>

          {/* Extra Paragraph Text */}
          <p className="text-sm text-gray-600 mt-4 font-roboto">
            I'm a paragraph. Click here to add your own text and edit me. It’s easy.
            Just click “Edit Text” or double-click me to add your own content.
          </p>
          <p className="text-sm text-gray-600 mt-2 font-roboto">
            I’m a great place for you to tell a story and let your users know more about you.
          </p>
        </div>

      </div>
    </div>
  );
}
