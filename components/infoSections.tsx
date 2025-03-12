import React from 'react';

const InfoSection: React.FC = () => {
return (
    <div className="flex justify-center mx-auto w-full">
    <div className="grid md:grid-cols-2 w-full max-w-6xl place-items-center">
        {/* Left Column - Resume */}
        <section id="resume" className="bg-[#f7f2ee] mt-20 flex flex-col items-center text-center w-full mr-5">
            <h2 className="text-2xl font-bold">Resume</h2>
            <p>Resume content to come here...</p>
        </section>

        {/* Right Column - Projects */}
        <section id="projects" className="bg-[#f7f2ee] mt-20 flex flex-col items-center text-center w-full ml-5">
            <h2 className="text-2xl font-bold">Projects</h2>
            <p>Project details to come here...</p>
        </section>
    </div>
</div>

    );
};

export default InfoSection;