import { Code2, Database, Layout, Terminal, PenTool as Tool } from 'lucide-react';

const skills = {
  frontend: ['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS', 'jQuery', 'JavaScript'],
  backend: ['Spring Boot', 'MS .NET', 'C++', 'Web API', 'REST'],
  databases: ['MySQL', 'MS SQL Server', 'MongoDB'],
  tools: ['Eclipse', 'IntelliJ', 'VSCode', 'Visual Studio', 'Postman', 'Git'],
};

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey from Mechanical Engineering to Software Development has been driven by a passion
            for creating innovative solutions. I specialize in full-stack development, with expertise
            in modern web technologies and a strong foundation in software engineering principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <Layout className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Frontend</h3>
            <ul className="space-y-2">
              {skills.frontend.map((skill) => (
                <li key={skill} className="text-gray-600 dark:text-gray-300">{skill}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Backend</h3>
            <ul className="space-y-2">
              {skills.backend.map((skill) => (
                <li key={skill} className="text-gray-600 dark:text-gray-300">{skill}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <Database className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Databases</h3>
            <ul className="space-y-2">
              {skills.databases.map((skill) => (
                <li key={skill} className="text-gray-600 dark:text-gray-300">{skill}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <Tool className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Tools</h3>
            <ul className="space-y-2">
              {skills.tools.map((skill) => (
                <li key={skill} className="text-gray-600 dark:text-gray-300">{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Core Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Data Structures',
              'Algorithms',
              'OOPs',
              'Software Development',
              'Full-Stack Development',
              'Cloud Basics',
            ].map((expertise) => (
              <div
                key={expertise}
                className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">{expertise}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}