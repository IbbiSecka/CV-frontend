import InfoSection from "@/components/infoSections";
import ProfileCard from "@/components/ProfileCard";
import { ProfileService } from "./services/profileService";



export  default async function Home() {
  
const profile = await ProfileService.getProfile()
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen px-4 mt-auto">
      {/* Main Container */}
      <ProfileCard profile={profile} />
      <InfoSection/>
    </div>
  );
}
