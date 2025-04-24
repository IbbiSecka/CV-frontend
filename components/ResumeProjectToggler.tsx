'use client';

import { Project, Resume } from "@/app/types/ibbi";
import ResumeSection from "./ResumeSection";
import ProjectSection from "./ProjectSection";
import { useState } from "react";

type ResumeProjectTogglerProps = {
  resume: Resume[];
  projects: Project[];
};

export default function ResumeProjectToggler({ resume, projects }: ResumeProjectTogglerProps) {
  
  const [activeTab, setActiveTab] = useState<'resume' | 'projects'>('resume');
  return (
    <div className="flex flex-col justify-center mx-auto w-full items-center">
      {/* Toggle switch UI */}
      <div className="relative inline-flex items-center cursor-pointer h-8">
        <span className={`text-sm font-medium p-2 ${activeTab === 'resume'  && 'text-black'}`}>
          Resume
        </span>
        
        <div 
          className={`w-16 h-8 flex items-center rounded-full p-1 transition-all duration-300 ease-in-out ${
            activeTab === 'resume' ? 'bg-[#f7f2ee]' : 'bg-black'
          }`}
          onClick={() => setActiveTab(prev => prev === 'resume' ? 'projects' : 'resume')}
        >
          <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300 ease-in-out ${
            activeTab === 'projects' ? 'translate-x-8' : 'translate-x-0'
          }`}></div>
        </div>
        
        <span className={`text-sm font-medium p-2 z-10 ${activeTab === 'projects' && 'text-black'}`}>
  Projects
</span>

      </div>

      {/* Content area */}
      <div className="w-full max-w-6xl p-6">
        {activeTab === 'resume' ? (
          <ResumeSection resume={resume} />
        ) : (
          <ProjectSection projects={projects} />
        )}
      </div>
    </div>
  );
}