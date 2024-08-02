"use client";
import React from "react";
import HorizontalScroll from "./horizontal-scroll";

const Home = () => (
  <>
    <main>
      <section className="text-center py-32 px-4 bg-[#efefef]">
        <h2>Scroll down to reach the horizontal scroll section</h2>
      </section>
      <section className="relative w-[100%] min-h-[100vh]">
        <HorizontalScroll>
          <div className="relative h-full pl-[150px] flex flex-row flex-nowrap justify-start items-center">
            <div className="relative h-[800px] w-[900px] bg-[#111f30] mr-[75px] flex-shrink-0"></div>
            <div className="relative h-[700px] w-[900px] bg-[#111f30] mr-[75px] flex-shrink-0"></div>
            <div className="relative h-[800px] w-[900px] bg-[#111f30] mr-[75px] flex-shrink-0"></div>
            <div className="relative h-[800px] w-[900px] bg-[#111f30] mr-[75px] flex-shrink-0"></div>
            <div className="relative h-[800px] w-[900px] bg-[#111f30] mr-[75px] flex-shrink-0"></div>
          </div>
        </HorizontalScroll>
      </section>
      <section className="text-center py-32 px-4 bg-[#efefef]">
        <h2>You have left the horizontal horizontal scroll section</h2>
      </section>
    </main>
  </>
);

export default Home;
