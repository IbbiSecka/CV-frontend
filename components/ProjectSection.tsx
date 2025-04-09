import { Project } from "@/app/types/ibbi"

type ProjectSectionProps = {
    projects : Project[]
}

export default function ProjectSection( {projects} : ProjectSectionProps) {

/*
{project.img && (
<div className="relative w-full h-48 mb-2 rounded overflow-hidden">
    <Image
    src={project.img}
    alt={project.name}
    fill
    className="object-cover rounded"
    />
</div>
)}*/ 
    return (
        <>
    <h2 className="text-2xl font-bold mb-6 text-center text-black">Projects</h2>
    <section className="bg-[#f7f2ee]  flex flex-col items-center text-center w-full p-6 rounded-md ">
      {projects.length === 0 ? (
        <p className="text-gray-600">No projects to display.</p>
      ) : (
        <div className="">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-4 border-collapse  border-gray-300 rounded-lg shadow-md w-full mb-6"
            >
              <h3 className="text-xl font-semibold text-black mb-2">{project.name}</h3>
            {/* project.img && */}
              <p className="text-sm text-gray-600 italic mb-1">{project.date} | {project.role}</p>
              <p className="text-black">{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
</>
    )
}