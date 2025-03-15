import { Github } from 'lucide-react';
import { Project } from '../types';
import { motion } from 'framer-motion';

const projects: Project[] = [
  {
    title: 'Restaurant Management Platform',
    description: 'A computerized restaurant management platform designed to handle customizable menus, order entry, kitchen order ticket (KOT) generation, billing, and order tracking. It automates restaurant operations, reducing human errors and improving efficiency. The platform supports multiple payment options, real-time order status updates, and a user-friendly dashboard for both customers and administrators.',
    techStack: ['Spring Boot', 'React.js', 'MongoDB', 'Bootstrap'],
    githubUrl: 'https://github.com/Shubham997799/Restorant-MAnagement-System',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Human Capital Management System (HCMS)',
    description: 'The Human Capital Management System (HCMS) is a web-based application designed to streamline HR processes and enhance employee management. Developed using React, Spring Boot, and MySQL, it offers role-based dashboards for employees, HR, and admins. Key features include employee data management, attendance tracking, leave requests, payroll generation, and task assignments.',
    techStack: ['React', 'Spring Boot', 'MySQL', 'JWT', 'Figma'],
    githubUrl: 'https://github.com/Shubham997799/HumanCapitalMS/tree/main',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'WealthConnect',
    description: 'WealthConnect is a financial management platform designed to help users track their income, expenses, and investments. It features budget planning, expense categorization, and real-time financial analytics to assist users in making informed financial decisions.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    githubUrl: 'https://github.com/Shubham997799/WealthConnect',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsGu-ftzZjppFHz9gEo8qKIC-LhL-JH--piw&s',
  },
  {
    title: 'Self-Charging Electric Vehicle Prototype',
    description: 'Developed a self-charging electric vehicle powered by lithium-ion batteries, solar panels, and a regenerative braking system. The rear-wheel hub motor provides propulsion while recovering energy during braking. Designed and simulated using CATIA and SolidWorks to ensure performance optimization.',
    techStack: ['CATIA', 'SolidWorks'],
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Here are some of the projects I've worked on that showcase my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repository for ${project.title}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}