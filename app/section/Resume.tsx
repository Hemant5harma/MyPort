import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Briefcase, GraduationCap, Code, FileText } from 'lucide-react';

const skills = [
  "Git", "GitHub", "GitLab", "Jenkins", "Docker", "Kubernetes", "Ansible", "Terraform", 
  "AWS CloudFormation", "Prometheus", "Grafana", "AWS", "Azure", "GCP", "Jira", "Selenium", 
  "Postman", "HashiCorp Vault", "Snyk", "SonarQube", "Maven", "Solidity", "Python", "C/C++", 
  "JavaScript", "HTML/CSS", "Django", "TypeScript"
];

const experiences = [
  {
    title: "DevOps and Cloud Computing Intern",
    company: "Grras Solutions Pvt. Ltd",
    period: "July 2024 – present",
    location: "Jaipur, India",
    responsibilities: [
      "Assisted in the implementation and management of CI/CD pipelines using tools like Jenkins, Git, and Docker.",
      "Gained hands-on experience with cloud platforms (e.g., AWS, Azure, GCP) to deploy and manage applications.",
      "Contributed to infrastructure as code (IaC) initiatives using tools such as Terraform and Ansible.",
      "Supported automation efforts to improve operational efficiency and reduce deployment times."
    ]
  },
  {
    title: "Web and Blockchain Developer Intern",
    company: "MetaBlock Inc.",
    period: "January 2023 – March 2023",
    location: "Jaipur, India",
    responsibilities: [
      "Acquired foundational knowledge in web development and blockchain/Web 3 technologies.",
      "Developed a full-stack web application utilizing React, PostgreSQL, Prisma, and JavaScript, enhancing user experience and functionality."
    ]
  }
];

const projects = [
  {
    title: "Blockchain-Based Smart Automation System",
    details: [
      "Developed the full website and application, including UI and backend.",
      "Created smart contracts for secure device interactions on Ethereum.",
      "Built a microservices architecture with Node.js, Docker, and Kubernetes.",
      "Automated CI/CD pipelines using Jenkins.",
      "Managed infrastructure with Ansible and Terraform on AWS.",
      "Implemented monitoring with Prometheus and Grafana.",
      "Ensured code quality and security with SonarQube and Snyk."
    ]
  },
  {
    title: "MedShare",
    details: [
      "MedShare is like an online shop for medicine and Lab tests.",
      "Developed a full-stack (MERN) website using React, Express, MongoDB and Axios.",
      "Developed Frontend using HTML, CSS, Material UI and TailwindCSS.",
      "Demo URL: medshare.vercel.app"
    ]
  }
];

const ResumeSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">My Resume</h2>
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h3 className="text-3xl font-bold text-white mb-4">Hemant Sharma</h3>
            <p className="text-xl text-green-400 mb-6">DevOps Engineer</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <p className="text-gray-300"><span className="text-green-400 mr-2">Email:</span> hemantsharmahare@gmail.com</p>
              <p className="text-gray-300"><span className="text-green-400 mr-2">Phone:</span> +91-8952048302</p>
              <p className="text-gray-300"><span className="text-green-400 mr-2">Location:</span> Jaipur, India</p>
              <p className="text-gray-300"><span className="text-green-400 mr-2">Website:</span> hemant5harma.tech</p>
              <p className="text-gray-300"><span className="text-green-400 mr-2">LinkedIn:</span> linkedin.com/in/hemant5harma</p>
            </div>
            <p className="text-gray-300 mb-8">
              DevOps Engineer with a strong background in web development, blockchain, and cloud computing. 
              Proven track record in enhancing user experience through full-stack application development 
              and improving operational efficiency with CI/CD pipelines and infrastructure as code.
            </p>
            
            <div className="mb-8">
              <button 
                className="flex items-center justify-between w-full text-left text-xl font-semibold text-white bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                onClick={() => toggleSection('skills')}
              >
                <span className="flex items-center"><Code className="mr-2" /> Technical Skills</span>
                {activeSection === 'skills' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {activeSection === 'skills' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 bg-gray-700 p-4 rounded-lg"
                >
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span key={index} className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <div className="mb-8">
              <button 
                className="flex items-center justify-between w-full text-left text-xl font-semibold text-white bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                onClick={() => toggleSection('experience')}
              >
                <span className="flex items-center"><Briefcase className="mr-2" /> Professional Experience</span>
                {activeSection === 'experience' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {activeSection === 'experience' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 space-y-6"
                >
                  {experiences.map((exp, index) => (
                    <div key={index} className="bg-gray-700 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-white mb-2">{exp.title}</h4>
                      <p className="text-green-400 mb-2">{exp.company}</p>
                      <p className="text-gray-300 mb-2">{exp.period} | {exp.location}</p>
                      <ul className="list-disc list-inside text-gray-300">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            <div className="mb-8">
              <button 
                className="flex items-center justify-between w-full text-left text-xl font-semibold text-white bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                onClick={() => toggleSection('projects')}
              >
                <span className="flex items-center"><FileText className="mr-2" /> Projects</span>
                {activeSection === 'projects' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {activeSection === 'projects' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 space-y-6"
                >
                  {projects.map((project, index) => (
                    <div key={index} className="bg-gray-700 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                      <ul className="list-disc list-inside text-gray-300">
                        {project.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            <div>
              <button 
                className="flex items-center justify-between w-full text-left text-xl font-semibold text-white bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                onClick={() => toggleSection('education')}
              >
                <span className="flex items-center"><GraduationCap className="mr-2" /> Education</span>
                {activeSection === 'education' ? <ChevronUp /> : <ChevronDown />}
              </button>
              {activeSection === 'education' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 bg-gray-700 p-4 rounded-lg"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">B.Tech in CSE</h4>
                  <p className="text-green-400 mb-2">Poornima Institute of Engineering and Technology</p>
                  <p className="text-gray-300">October 2021 – present | Jaipur, India</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;