import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Trophy, Star } from 'lucide-react';
import BackgroundImage from './BackgroundImage';

const achievements = [
  { title: '5-star rating on SQL and Python', platform: 'HackerRank' },
  { title: '2-time State Taekwondo Champion', year: '2018, 2019' },
];

const AwardsAndAchievements: React.FC = () => {
  return (
    <section id="awards-achievements" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <BackgroundImage imageSrc="./images/awards-bg.jpg" translateY={[-30, 30]} />
      <div className="w-full relative z-10 px-16">
        <h2 className="chapter-heading">
          Awards & Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {index === 0 ? (
                  <Star className="section-icon" />
                ) : (
                  <Trophy className="section-icon" />
                )}
                <h3 className="section-heading">
                  {achievement.title}
                </h3>
              </div>
              <p className="section-text">
                {achievement.platform || achievement.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsAndAchievements;

