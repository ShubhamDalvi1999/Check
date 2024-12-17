import React from 'react';
import { Brain, TrendingUp, Code } from 'lucide-react';
import AnimatedIcon from './AnimatedIcon';
import BackgroundImage from './BackgroundImage';

const MachineLearning: React.FC = () => {
  return (
    <section id="machine-learning" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <BackgroundImage imageSrc="/images/machine-learning-bg.png" translateY={[-60, 60]} />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary dark:text-white">Chapter 4: Unlocking Data's Potential</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <Brain className="w-12 h-12 mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white">Machine Learning</h3>
            <p className="text-text dark:text-gray-300">Implementing advanced ML algorithms for predictive analytics and pattern recognition.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <TrendingUp className="w-12 h-12 mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white">Predictive Analytics</h3>
            <p className="text-text dark:text-gray-300">Leveraging historical data to forecast trends and make data-driven decisions.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <Code className="w-12 h-12 mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white">AI Integration</h3>
            <p className="text-text dark:text-gray-300">Integrating AI models into existing data pipelines for automated insights.</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-primary dark:text-white">Stock Market Analysis with PySpark</h3>
          <p className="text-text dark:text-gray-300">Transformed stock market data to predict institutional activity and identify market movements.</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          <AnimatedIcon
            icon={<img src="/icons/python.svg" alt="Python" className="w-full h-full" />}
            name="Python"
          />
          <AnimatedIcon
            icon={<img src="/icons/pyspark.svg" alt="PySpark" className="w-full h-full" />}
            name="PySpark"
          />
          <AnimatedIcon
            icon={<img src="/icons/tensorflow.svg" alt="TensorFlow" className="w-full h-full" />}
            name="TensorFlow"
          />
          <AnimatedIcon
            icon={<img src="/icons/pytorch.svg" alt="PyTorch" className="w-full h-full" />}
            name="PyTorch"
          />
          <AnimatedIcon
            icon={<img src="/icons/scikit-learn.svg" alt="Scikit-learn" className="w-full h-full" />}
            name="Scikit-learn"
          />
          <AnimatedIcon
            icon={<img src="/icons/pandas.svg" alt="Pandas" className="w-full h-full" />}
            name="Pandas"
          />
        </div>
      </div>
    </section>
  );
};

export default MachineLearning;

