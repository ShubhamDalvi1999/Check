import React from 'react';
import { Database, Cloud, Wifi } from 'lucide-react';
import AnimatedIcon from './AnimatedIcon';
import BackgroundImage from './BackgroundImage';

const DataCollection: React.FC = () => {
  return (
    <section id="data-collection" className="content-section relative overflow-hidden mt-0 mb-0">
      <div className="parallax-layer" data-speed="-0.2">
        <BackgroundImage imageSrc="./images/data-collection.jpg" translateY={[-30, 30]} />
      </div>
      <div className="parallax-layer w-full px-16" data-speed="0.1">
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center text-primary dark:text-white animate-text">Chapter 1: Where Data Begins</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <Database className="w-24 h-24 mb-8 text-accent" />
              <h3 className="text-4xl font-semibold mb-6 text-primary dark:text-white animate-text">APIs</h3>
              <p className="text-2xl dark:text-gray-300 animate-text">Expertise in integrating various APIs for seamless data collection.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <Cloud className="w-24 h-24 mb-8 text-accent" />
              <h3 className="text-4xl font-semibold mb-6 text-primary dark:text-white animate-text">Cloud Sources</h3>
              <p className="text-2xl dark:text-gray-300 animate-text">Proficient in working with cloud storage solutions like S3 buckets.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <Wifi className="w-24 h-24 mb-8 text-accent" />
              <h3 className="text-4xl font-semibold mb-6 text-primary dark:text-white animate-text">Real-time Streams</h3>
              <p className="text-2xl dark:text-gray-300 animate-text">Experience in handling real-time data streams for immediate insights.</p>
            </div>
          </div>
          <div className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-5xl font-semibold mb-8 text-primary dark:text-white animate-text">End-to-End AWS Pipeline Project</h3>
            <p className="text-3xl dark:text-gray-300 animate-text">Built robust ETL pipelines extracting raw API data into Snowflake using AWS Glue and Lambda.</p>
          </div>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-16 gap-y-20">
            <AnimatedIcon
              icon={<img src="./icons/azure.jpg" alt="AWS" className="w-full h-full" />}
              name="AWS"
            />
            <AnimatedIcon
              icon={<img src="./icons/snowflake.png" alt="Snowflake" className="w-full h-full" />}
              name="Snowflake"
            />
            <AnimatedIcon
              icon={<img src="./icons/glue.png" alt="AWS Glue" className="w-full h-full" />}
              name="AWS Glue"
            />
            <AnimatedIcon
              icon={<img src="./icons/lambda.jpg" alt="AWS Lambda" className="w-full h-full" />}
              name="AWS Lambda"
            />
            <AnimatedIcon
              icon={<img src="./icons/s3.jpg" alt="Amazon S3" className="w-full h-full" />}
              name="Amazon S3"
            />
            <AnimatedIcon
              icon={<img src="./icons/api.png" alt="API" className="w-full h-full" />}
              name="API"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataCollection;

