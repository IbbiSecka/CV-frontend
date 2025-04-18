import React from 'react';
import { Profile, Resume } from "@/app/types/ibbi";


type ResumeSectionProps = {
  resume: Resume[];
}

export default function ResumeSection  ({ resume } : ResumeSectionProps) {
    
return (
    <>
    <h2 className="text-2xl font-bold mb-6 text-center text-black">Resume</h2>
    <section className="bg-[#f7f2ee]  flex flex-col items-center text-center w-full p-6 rounded-md ">
      {resume.length === 0 ? (
        <p className="text-gray-600">Resume yet to come ...</p>
      ) : (
        resume.map((entry, index) => (
          <div
            key={index}
            className="w-full  mb-6 p-4 bg-white border border-gray-300 rounded-md text-left shadow-md"
          >
            <h3 className="text-xl font-semibold text-black">{entry.position}</h3>
            <p className="text-gray-700">{entry.companyName} - {entry.companyLocation}</p>
            <p className="text-sm text-gray-500 italic">{entry.duration}</p>
            <p className="mt-2 text-black">{entry.description}</p>
          </div>
        ))
      )}
    </section>
    </>

    )
}