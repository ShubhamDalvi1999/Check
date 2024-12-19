import React from 'react';
import { Brain, TrendingUp, Code } from 'lucide-react';
import AnimatedIcon from './AnimatedIcon';
import BackgroundImage from './BackgroundImage';

const MachineLearning: React.FC = () => {
  return (
    <section id="machine-learning" className="min-h-[70vh] flex items-center justify-center relative overflow-hidden -mt-16">
      <BackgroundImage imageSrc="/images/machine-learning-bg.png" translateY={[-45, 45]} />
      <div className="w-full relative z-10 px-16">
        <h2 className="chapter-heading">
          Chapter 4: Predictive Analytics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <Brain className="section-icon" />
            <h3 className="section-heading">
              Machine Learning
            </h3>
            <p className="section-text">
              Building and deploying ML models for predictive analytics.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <TrendingUp className="section-icon" />
            <h3 className="section-heading">
              Deep Learning
            </h3>
            <p className="section-text">
              Neural networks for complex pattern recognition.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <Code className="section-icon" />
            <h3 className="section-heading">
              Time Series Analysis
            </h3>
            <p className="section-text">
              Forecasting and trend analysis using statistical models.
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
          <h3 className="project-heading">
            Sales Forecasting Model
          </h3>
          <p className="project-text">
            Developed an LSTM model achieving 95% accuracy in predicting monthly sales.
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
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
          <AnimatedIcon
            icon={<img src="/icons/numpy.svg" alt="NumPy" className="w-full h-full" />}
            name="NumPy"
          />
          <AnimatedIcon
            icon={<img src="/icons/matplotlib.svg" alt="Matplotlib" className="w-full h-full" />}
            name="Matplotlib"
          />
        </div>
      </div>
    </section>
  );
};

export default MachineLearning;

