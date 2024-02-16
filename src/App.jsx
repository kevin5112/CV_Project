import { useState } from 'react';
import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Info from './components/Info';
import ResumeBuilder from './components/ResumeBuilder';

function App() {
  return (
    <div className="flex flex-col align-center p-0 m-0 h-fit w-screen p-6 bg-slate-100">
      <h1 className="inset-x-0 top-0 text-5xl pb-6">CV Generator</h1>
      <div className="flex flex-row gap-6 h-full">
        <div className="flex flex-col flex-none gap-5">
          <Info />
          <Education />
          <Experience />
        </div>
        <div className="flex-1 min-w-[21cm] min-h-[29.7cm]">
          <ResumeBuilder />
        </div>
      </div>
    </div>
  );
}

export default App;
