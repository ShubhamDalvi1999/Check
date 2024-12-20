import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import BackgroundImage from './BackgroundImage';

const skills = [
  { category: 'Programming', items: ['Python', 'Java', 'SQL'] },
  { category: 'Data Engineering', items: ['Apache Spark', 'Airflow', 'ETL'] },
  { category: 'Cloud', items: ['AWS', 'Azure', 'Snowflake'] },
  { category: 'Visualization', items: ['Power BI', 'Tableau'] },
];

const ToolsAndSkills: React.FC = () => {
  return (
    <section id="tools-skills" className="min-h-[70vh] flex items-center justify-center relative overflow-hidden py-16">
      <BackgroundImage imageSrc="./images/skills-bg.jpg" translateY={[-30, 30]} />
      <div className="container mx-auto relative z-10">
        <h2 className="chapter-heading mb-12">
          Tools & Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="section-heading border-b border-gray-200 dark:border-gray-700 pb-2">
                {skillCategory.category}
              </h3>
              <ul className="space-y-3 mt-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    <span className="section-text">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsAndSkills;

