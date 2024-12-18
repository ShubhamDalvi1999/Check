import React from 'react';
import { BarChart, PieChart, LineChart } from 'lucide-react';
import AnimatedIcon from './AnimatedIcon';
import BackgroundImage from './BackgroundImage';

const DataVisualization: React.FC = () => {
  return (
    <section id="data-visualization" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <BackgroundImage imageSrc="/images/data-visualization-bg.png" translateY={[-50, 50]} />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary dark:text-white">Chapter 3: Making Sense of the Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <BarChart className="w-12 h-12 mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white">Interactive Dashboards</h3>
            <p className="text-text dark:text-gray-300">Creating dynamic and interactive dashboards using Power BI and DAX.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <PieChart className="w-12 h-12 mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white">Data Storytelling</h3>
            <p className="text-text dark:text-gray-300">Transforming complex data into compelling visual narratives.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <LineChart className="w-12 h-12 mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white">Real-time Analytics</h3>
            <p className="text-text dark:text-gray-300">Implementing real-time data visualization for immediate insights.</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-primary dark:text-white">Power BI Dashboards</h3>
          <p className="text-text dark:text-gray-300">Automated refreshes and role-based access to provide stakeholders with actionable analytics.</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
          <AnimatedIcon
            icon={<img src="/icons/powerbi-logo.png" alt="Power BI" className="w-full h-full" />}
            name="Power BI"
          />
          <AnimatedIcon
            icon={<img src="/icons/tableau-logo.png" alt="Tableau" className="w-full h-full" />}
            name="Tableau"
          />
          <AnimatedIcon
            icon={<img src="/icons/dax-logo.png" alt="DAX" className="w-full h-full" />}
            name="DAX"
          />
          <AnimatedIcon
            icon={<img src="/icons/d3-logo.png" alt="D3.js" className="w-full h-full" />}
            name="D3.js"
          />
          <AnimatedIcon
            icon={<img src="/icons/plotly-logo.png" alt="Plotly" className="w-full h-full" />}
            name="Plotly"
          />
        </div>
      </div>
    </section>
  );
};

export default DataVisualization;

