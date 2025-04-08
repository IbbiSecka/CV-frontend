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
          <section className="bg-[#f7f2ee] mt-10 flex flex-col items-center text-center w-full p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-black">Projects</h2>
      {projects.length === 0 ? (
        <p className="text-gray-600">No projects to display.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-4 border border-gray-300 rounded-lg shadow-md w-full max-w-md"
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

    )
}