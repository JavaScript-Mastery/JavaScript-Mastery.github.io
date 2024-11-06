import React from "react";
// import clsx from "clsx";
import Layout from "@theme/Layout";
// import Link from "@docusaurus/Link";
// import styles from "./index.module.css";
import Hero from "@src/components/Home/Hero";
import About from "@src/components/Home/About";
import WhyLearnJavaScript from "@src/components/Home/WhyLearnJavaScript";
import Courses from "@src/components/Home/Courses";
import TopProjects from "@src/components/Home/TopProjects";
import Practice from "@src/components/Home/Practice";
import Community from "@src/components/Home/Community";
import Testimonials from "@src/components/Home/Testimonials";
import Blog from "@src/components/Home/Blog";
import GetStarted from "@src/components/Home/GetStarted";

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Xiaohai's Mind Palace. A place for organizing notes across multiple domains. A place for writing blogs. A place for showcasing projects."
    >
      <Hero />
      <About />
      <WhyLearnJavaScript />
      <Courses />
      <TopProjects />
      <Practice />
      <Community />
      <Testimonials />
      <Blog />
      <GetStarted />
    </Layout>
  );
}
