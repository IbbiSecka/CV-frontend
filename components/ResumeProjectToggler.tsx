"use client"

import { Project, Resume } from "@/app/types/ibbi"
import ResumeSection from "./ResumeSection";
import { useState } from "react";
import ProjectSection from "./ProjectSection";


type ResumeProjectTogglerProps = {
    resume : Resume[];
    projects : Project[];
}
export default function ResumeProjectToggler({resume, projects} : ResumeProjectTogglerProps ){
    const [activeTab, setActiveTab] = useState<'resume' | 'projects'>('resume')
    return(
           <div className="flex flex-col justify-center mx-auto w-full items-center">
      <div className="mt-10">
        <button
          onClick={() =>
            setActiveTab((prev) => (prev === 'resume' ? 'projects' : 'resume'))
          }
          className="bg-[#f7f2ee] text-black px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 hover:text-[#31185a] transition"
        >
          {activeTab === 'resume' ? 'Show Projects' : 'Show Resume'}
        </button>
      </div>

      <div className="w-full max-w-6xl p-6">
        {activeTab === 'resume' ? (
          <ResumeSection resume={resume} />
        ) : (
          <ProjectSection projects={projects} />
        )}
      </div>
    </div>
    )
}