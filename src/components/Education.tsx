import { GraduationCap, Award } from 'lucide-react';
import { EducationItem, Certification } from '../types';

const education: EducationItem[] = [
  {
    institution: 'CDAC Hyderabad',
    location: 'Telangana, India',
    period: 'Aug 2024 - Feb 2025',
    degree: 'PG Diploma in Advanced Computing (PG-DAC)',
    score: '61%',
  },
  {
    institution: 'RMD Sinhgad School of Engineering',
    location: 'Pune, India',
    period: 'Aug 2017 - Aug 2022',
    degree: 'Bachelor of Engineering - Mechanical',
    score: 'GPA: 7.75',
  },
  {
    institution: 'B.H. Chate School and Junior College',
    location: 'Khed-Shivapur, India',
    period: 'March 2017',
    degree: 'Intermediate (HSC)',
    score: '72.61%',
  },
  {
    institution: 'Shankarrao Butte Patil Vidyalaya',
    location: 'Junnar, Pune, India',
    period: 'March 2015',
    degree: 'Matriculation (SSC)',
    score: '89.60%',
  },
];

const certifications: Certification[] = [
  { title: 'C-Language', issuer: 'Phoenix InfoTech, Pune' },
  { title: 'Python OOP', issuer: 'LinkedIn Learning & Phoenix InfoTech, Pune' },
  { title: 'C++ Language', issuer: 'EduComp Softech, Pune' },
  { title: 'Java', issuer: 'EduComp Softech, Pune' },
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.institution}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.location}</p>
                  <div className="flex justify-between items-center mt-4 text-sm">
                    <span className="text-blue-600 dark:text-blue-400">{edu.period}</span>
                    {edu.score && (
                      <span className="text-gray-600 dark:text-gray-300">{edu.score}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <Award className="w-6 h-6" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}