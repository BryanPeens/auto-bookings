import React from "react";
import Hero from "../components/Hero";
import DesignBlock from "../components/DesignBlock";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
      <Hero/>
      <div></div>
      <DesignBlock />
    </div>
  );
}
