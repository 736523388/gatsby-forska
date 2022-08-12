// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div className="container mx-auto px-12 py-4 shadow-xl mt-10 box-border">
        <h1 className="text-xl font-medium">关于我</h1>
        <h2 className="text-lg">框架类</h2>
        <ul className="list-disc list-inside">
          <li className="ml-8">Laravel</li>
          <li className="ml-8">Swoole</li>
          <li className="ml-8">Gin</li>
        </ul>
        <h1 className="text-xl font-medium mt-5">关于本站</h1>
        <ul className="list-disc list-inside">
          <li className="ml-8">2022年8月正式搭建</li>
          <li className="ml-8">2022年8月使用gatsby</li>
        </ul>
      </div>
    </Layout>
  );
};
// Step 3: Export your component
export default AboutPage;
