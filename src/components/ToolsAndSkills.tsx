import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const skills = [
  { category: 'Programming', items: ['Python', 'Java', 'SQL'] },
  { category: 'Data Engineering', items: ['Apache Spark', 'Airflow', 'ETL'] },
  { category: 'Cloud', items: ['AWS', 'Azure', 'Snowflake'] },
  { category: 'Visualization', items: ['Power BI', 'Tableau'] },
];

const ToolsAndSkills: React.FC = () => {
  return (
    <section id="tools-and-skills" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Parallax translateY={[-70, 70]} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 opacity-20"></div>
      </Parallax>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Chapter 5: Tools & Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{skillCategory.category}</h3>
              <ul className="space-y-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
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

