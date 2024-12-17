import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Trophy, Star } from 'lucide-react';

const achievements = [
  { title: '5-star rating on SQL and Python', platform: 'HackerRank' },
  { title: '2-time State Taekwondo Champion', year: '2018, 2019' },
];

const AwardsAndAchievements: React.FC = () => {
  return (
    <section id="awards-achievements" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Parallax translateY={[-90, 90]} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 opacity-20"></div>
      </Parallax>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Awards & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {index === 0 ? (
                  <Star className="w-8 h-8 mr-2 text-yellow-500" />
                ) : (
                  <Trophy className="w-8 h-8 mr-2 text-yellow-500" />
                )}
                <h3 className="text-xl font-semibold">{achievement.title}</h3>
              </div>
              <p>{achievement.platform || achievement.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsAndAchievements;

