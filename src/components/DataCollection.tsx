import React from 'react';
import { Database, Cloud, Wifi } from 'lucide-react';
import AnimatedIcon from './AnimatedIcon';
import BackgroundImage from './BackgroundImage';

const DataCollection: React.FC = () => {
  return (
    <section id="data-collection" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="parallax-layer" data-speed="-0.2">
        <BackgroundImage imageSrc="/images/data-collection-bg.png" translateY={[-30, 30]} />
      </div>
      <div className="parallax-layer" data-speed="0.1">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary dark:text-white animate-text">Chapter 1: Where Data Begins</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <Database className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white animate-text">APIs</h3>
              <p className="text-text dark:text-gray-300 animate-text">Expertise in integrating various APIs for seamless data collection.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <Cloud className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white animate-text">Cloud Sources</h3>
              <p className="text-text dark:text-gray-300 animate-text">Proficient in working with cloud storage solutions like S3 buckets.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <Wifi className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white animate-text">Real-time Streams</h3>
              <p className="text-text dark:text-gray-300 animate-text">Experience in handling real-time data streams for immediate insights.</p>
            </div>
          </div>
          <div className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-primary dark:text-white animate-text">End-to-End AWS Pipeline Project</h3>
            <p className="text-text dark:text-gray-300 animate-text">Built robust ETL pipelines extracting raw API data into Snowflake using AWS Glue and Lambda.</p>
          </div>
          <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-8">
            <AnimatedIcon
              icon={<img src="/icons/aws-logo.png" alt="AWS" className="w-full h-full" />}
              name="AWS"
            />
            <AnimatedIcon
              icon={<img src="/icons/snowflake-logo.png" alt="Snowflake" className="w-full h-full" />}
              name="Snowflake"
            />
            <AnimatedIcon
              icon={<img src="/icons/aws-glue-logo.png" alt="AWS Glue" className="w-full h-full" />}
              name="AWS Glue"
            />
            <AnimatedIcon
              icon={<img src="/icons/aws-lambda-logo.png" alt="AWS Lambda" className="w-full h-full" />}
              name="AWS Lambda"
            />
            <AnimatedIcon
              icon={<img src="/icons/aws-s3-logo.png" alt="Amazon S3" className="w-full h-full" />}
              name="Amazon S3"
            />
            <AnimatedIcon
              icon={<img src="/icons/api-logo.png" alt="API" className="w-full h-full" />}
              name="API"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataCollection;

