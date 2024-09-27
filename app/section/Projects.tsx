import React from 'react';
import Image from 'next/image';
import Card from '../components/Card';


interface Result {
  title: string;
}

interface Project {
  company: string;
  year: string;
  title: string;
  results: Result[];
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    company: "PIET",
    year: "2024",
    title: "Blockchain-Based Smart Automation System",
    results: [
      { title: "Full-stack dev with UI and backend" },
      { title: "Built secure microservices with Node.js" },
      { title: "Implemented CI/CD and monitoring" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: "/images/ai-startup-landing-page.png",
  },
  {
    company: "Freelance Project",
    year: "2023",
    title: "MedShare",
    results: [
      { title: "Online shop for medicine and lab tests" },
      { title: "Full-stack MERN website with React, Express, MongoDB, Axios" },
      { title: "Frontend using HTML, CSS, Material UI, and Tailwind CSS" },
    ],
    link: "https://medshare.vercel.app/",
    image: "/images/light-saas-landing-page.png",
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: "/images/light-saas-landing-page.png",
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: "/images/light-saas-landing-page.png",
  },
];

interface ProjectCardProps {
  title: string;
  description: string[];
  image: string;
  link: string;
  company: string;
  year: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, company, year }) => {


  return (
    <Card className="w-[70vw] h-[70vh] p-8 flex flex-col md:flex-row gap-8 ">
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <div>
          <p className="text-green-400 text-sm mb-2">{company} • {year}</p>
          <h3 className="text-4xl font-bold mb-6 text-white">{title}</h3>
          <ul className="space-y-3 mb-8">
            {description.map((item, i) => (
              <li key={i} className="text-gray-300 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <a
          href={link}
          className="inline-block bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 ease-in-out"
        >
          Visit Live Site
        </a>
      </div>
      <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
    </Card>
  );
};

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Featured Projects</h2>
        <div className="relative">
          {projects.map((project, index) => (
            <div key={index} className="h-screen flex justify-center" style={{ position: 'sticky', top: `calc(64px + ${index * 50}px)` }}>
              <ProjectCard
                title={project.title}
                description={project.results.map(res => res.title)}
                image={project.image}
                link={project.link}
                company={project.company}
                year={project.year}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}