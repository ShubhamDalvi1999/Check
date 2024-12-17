import React from 'react';
import { Database, Server, Code } from 'lucide-react';
import AnimatedIcon from './AnimatedIcon';
import BackgroundImage from './BackgroundImage';

const DataWarehousing: React.FC = () => {
  return (
    <section id="data-warehousing" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <BackgroundImage imageSrc="/images/data-warehousing-bg.png" translateY={[-40, 40]} />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary dark:text-white">Chapter 2: Organizing the Chaos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <Database className="w-12 h-12 mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white">Data Warehousing</h3>
            <p className="text-text dark:text-gray-300">Expertise in Snowflake and Redshift for efficient data storage and management.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <Server className="w-12 h-12 mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white">ETL Pipelines</h3>
            <p className="text-text dark:text-gray-300">Proficient in creating robust ETL pipelines using Spark and Airflow.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <Code className="w-12 h-12 mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white">Schema Validation</h3>
            <p className="text-text dark:text-gray-300">Experience in implementing and maintaining data quality through schema validation.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-primary dark:text-white">Bronze-Silver-Gold Data Pipeline on Azure</h3>
            <p className="text-text dark:text-gray-300">Developed Spark-based pipelines for efficient data transformation using Databricks Workflows.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-primary dark:text-white">Postgres to Snowflake Migration</h3>
            <p className="text-text dark:text-gray-300">Engineered seamless data migration using Airbyte, achieving 40% faster delivery.</p>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          <AnimatedIcon
            icon={<img src="/icons/snowflake.svg" alt="Snowflake" className="w-full h-full" />}
            name="Snowflake"
          />
          <AnimatedIcon
            icon={<img src="/icons/redshift.svg" alt="Redshift" className="w-full h-full" />}
            name="Redshift"
          />
          <AnimatedIcon
            icon={<img src="/icons/spark.svg" alt="Apache Spark" className="w-full h-full" />}
            name="Apache Spark"
          />
          <AnimatedIcon
            icon={<img src="/icons/airflow.svg" alt="Apache Airflow" className="w-full h-full" />}
            name="Apache Airflow"
          />
          <AnimatedIcon
            icon={<img src="/icons/azure.svg" alt="Azure" className="w-full h-full" />}
            name="Azure"
          />
          <AnimatedIcon
            icon={<img src="/icons/databricks.svg" alt="Databricks" className="w-full h-full" />}
            name="Databricks"
          />
        </div>
      </div>
    </section>
  );
};

export default DataWarehousing;

