import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Award, GraduationCap } from 'lucide-react';

const certifications = [
  { name: 'Microsoft DP-203', link: '#' },
  { name: 'AWS Cloud Practitioner', link: '#' },
  { name: 'Snowflake', link: '#' },
  { name: 'Power BI', link: '#' },
];

const CertificationsAndEducation: React.FC = () => {
  return (
    <section id="certifications-education" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Parallax translateY={[-80, 80]} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-20"></div>
      </Parallax>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Certifications & Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 mr-2 text-yellow-500" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li key={index}>
                  <a href={cert.link} className="text-blue-500 hover:underline">{cert.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-8 h-8 mr-2 text-yellow-500" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <p className="text-lg mb-2">MSc in Data Analytics</p>
            <p>National College Ireland</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsAndEducation;

