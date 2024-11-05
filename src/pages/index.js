import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import Hero from "@src/components/Home/Hero";
import About from "@src/components/Home/About";
import WhyLearnJavaScript from "@src/components/Home/WhyLearnJavaScript";

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Xiaohai's Mind Palace. A place for organizing notes across multiple domains. A place for writing blogs. A place for showcasing projects."
    >
      <Hero />
      <About />
      <WhyLearnJavaScript />
    </Layout>
  );
}
