import React from 'react';
import {  Resume } from "@/app/types/ibbi";
import ResumeCarousel from './ResumeCarousel';


type ResumeSectionProps = {
  resume: Resume[];
}

export default function ResumeSection  ({ resume } : ResumeSectionProps) {
    
return (
    <>
    <h2 className="text-2xl font-bold mb-6 text-center text-black">Resume</h2>
    <section className="  flex flex-col items-center text-center w-full p-6 rounded-md">
      {resume.length === 0 ? (
          <p className="text-gray-600">Resume yet to come ...</p>
        ) : (
          <ResumeCarousel resume={resume} />
        )}
    </section>
    </>

    )
}