import React from 'react';
import { Profile } from "@/app/types/ibbi";
import { ProfileService } from '@/app/services/profileService';
import ResumeProjectToggler from './ResumeProjectToggler';

type InfoSectionProps = {
  profile: Profile | null;
};



export default async function InfoSection ( ) {
    const [resume, projects] = await Promise.all([
    ProfileService.getResume(),
    ProfileService.getProjects(),
  ]);
return (
    <ResumeProjectToggler resume={resume} projects={projects} />
    );
};

