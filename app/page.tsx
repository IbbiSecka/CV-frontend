"use client";
import InfoSection from "@/components/infoSections";
import useProfile from "./services/apiClient";
import ProfileCard from "@/components/ProfileCard";



export default function Home() {
  
const profile = useProfile();
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen px-4 mt-auto">
      {/* Main Container */}
      <ProfileCard profile={profile} />
      <InfoSection/>
    </div>
  );
}
