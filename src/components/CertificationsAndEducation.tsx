import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Award, GraduationCap } from 'lucide-react';
import BackgroundImage from './BackgroundImage';

const certifications = [
  { name: 'Microsoft DP-203', link: '#' },
  { name: 'AWS Cloud Practitioner', link: '#' },
  { name: 'Snowflake', link: '#' },
  { name: 'Power BI', link: '#' },
];

const CertificationsAndEducation: React.FC = () => {
  return (
    <section id="certifications-education" className="min-h-[70vh] flex items-center justify-center relative overflow-hidden -mt-32">
      <BackgroundImage imageSrc="./images/certifications-bg.jpg" translateY={[-30, 30]} />
      <div className="w-full relative z-10 px-16">
        <h2 className="chapter-heading">
          Certifications & Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Award className="section-icon" />
              <h3 className="section-heading">
                Certifications
              </h3>
            </div>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li key={index}>
                  <a href={cert.link} className="section-text text-blue-500 hover:underline">
                    {cert.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <GraduationCap className="w-8 h-8 mr-2 text-yellow-500" />
              <h3 className="section-heading">Education</h3>
            </div>
            <p className="section-text">MSc in Data Analytics</p>
            <p>National College Ireland</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsAndEducation;

