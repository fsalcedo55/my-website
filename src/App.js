import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import ProjectDetailView from "./components/ProjectDetailView";
// import ProjectFeature from "./components/ProjectFeature";
// import NotFound from "./components/NotFound";
import { ArrowNarrowDownIcon } from "@heroicons/react/outline";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-gradient-to-t from-[#0D2840] to-[#0D0903]">
      <div className="text-indigo-500 2xl:opacity-75 lg:opacity-75 md:opacity-75 opacity-0 z-0">
        <div className="fixed bottom-7 left-1.5 mb-12">
          <div className="flex flex-col items-center">
            <h1 className="rotate-90 font-mono text-xs mx-2 my-6">scroll</h1>
            <ArrowNarrowDownIcon className="w-5 animate-bounce " />
          </div>
        </div>
        <div className="fixed bottom-7 right-1.5 mb-12">
          <div className="flex flex-col items-center">
            <h1 className="rotate-90 font-mono text-xs mx-2 my-6">scroll</h1>
            <ArrowNarrowDownIcon className="w-5 animate-bounce" />
          </div>
        </div>
      </div>
      <Navbar />
      <Routes>
        <Route path="*" element={<LandingPage />} />
        <Route path="project-detail/:id" element={<ProjectDetailView />} />
        {/* <Route path="project-feature" element={<ProjectFeature />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
