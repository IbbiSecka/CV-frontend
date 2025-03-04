import Image from "next/image";

<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"/>

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen text-black px-4">
      {/* Main Container */}
      <div className="relative flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg p-6 max-w-3xl w-full">
        
        {/* Background rectangle effect */}

        {/* Left Section - Profile Card */}
        <div className="bg-[#f9f5f0] shadow-2xl rounded-lg p-6 flex flex-col items-center w-[280px] h-[400px] relative">
          {/* Profile Image */}
          <div className="w-28 h-28 rounded-full overflow-hidden border border-orange-50 shadow-md relative">
            <Image 
              src="/images/ibbiimg.jpg" 
              alt="Profile" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-full"
            />
          </div>

          {/* Name & Title */}
          <h3 className="p-5 text-3xl font-extrabold mt-4 font-garamond w-1 flex justify-center text-center ">Ibrahima Secka</h3>
          <p className=" pt-3 text-sm text-gray-500 ">SOFTWARE DEVELOPER </p>

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
