import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen  text-black px-4">
      {/* Main Container */}
      <div className="relative flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg p-6 max-w-3xl w-full">
        
        {/* Background rectangle effect */}
        <div className="absolute left-[-40px] top-[50%] transform -translate-y-1/2 w-[220px] h-[380px] bg-[#e6d8c6] rounded-lg -z-10"></div>

        {/* Left Section - Profile Card */}
        <div className="bg-[#f9f5f0] shadow-2xl rounded-lg p-6 flex flex-col items-center w-[300px] h-[480px] relative">
          {/* Profile Image */}
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image 
              src="/images/ibbiimg.jpg" 
              alt="Profile" 
              width={150} 
              height={150} 
              className="object-contain"
            />
          </div>

          {/* Name & Title */}
          <h3 className="text-lg font-bold mt-4">Ibrahima Secka</h3>
          <p className="text-sm text-gray-500">Software Developer</p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-auto mb-2">
            <a href="#" className="text-black"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-black"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-black"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="text-black"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Right Section - Text & Buttons */}
        <div className="flex flex-col justify-center w-[300px] text-center md:text-left ml-6">
          <h2 className="text-4xl font-bold">Hello</h2>
          <p className="text-lg mt-2">Here's who I am & what I do</p>

          {/* Buttons */}
          <div className="mt-6 flex gap-3">
            <a href="/resume" className="bg-blue-500 text-white px-4 py-2 rounded font-semibold">Resume</a>
            <a href="/projects" className="border border-black px-4 py-2 rounded font-semibold">Projects</a>
          </div>

          {/* Extra Paragraph Text */}
          <p className="text-sm text-gray-600 mt-4">
            I'm a paragraph. Click here to add your own text and edit me. It’s easy.
            Just click “Edit Text” or double click me to add your own content and
            make changes to the font.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            I’m a great place for you to tell a story and let your users know a little more about you.
          </p>
        </div>

      </div>
    </div>
  );
}
