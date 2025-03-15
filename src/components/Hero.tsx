import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{' '}
              <span className="text-blue-600 dark:text-blue-400">Shubham Tate</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Software Engineer | Full-Stack Developer | Tech Enthusiast
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              I am a PG-DAC graduate from C-DAC Hyderabad with a strong foundation in software development. 
              With a background in Mechanical Engineering from SPPU, I have transitioned into IT, 
              specializing in Full-Stack Development with Java, React.js, and databases like MySQL and MongoDB.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/src/Resume/ShubhamTate_Resume (2).pdf"
                download
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Download CV
                <Download className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="https://github.com/Shubham997799"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/shubham-tate-48703734b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:tateshubham549@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <img
              src="/src/components/img/Shubham1.jpg"
              alt="Shubham Tate"
              className="w-full h-full object-cover rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
