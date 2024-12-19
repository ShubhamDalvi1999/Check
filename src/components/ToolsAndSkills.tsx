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
    <section id="tools-skills" className="min-h-[70vh] flex items-center justify-center relative overflow-hidden -mt-16">
      <BackgroundImage imageSrc="./images/skills-bg.jpg" translateY={[-30, 30]} />
      <div className="w-full relative z-10 px-16">
        <h2 className="chapter-heading">
          Chapter 5: Tools & Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="section-heading">
                {skillCategory.category}
              </h3>
              <ul className="space-y-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
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

