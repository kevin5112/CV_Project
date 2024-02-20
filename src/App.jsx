import { useState } from 'react';
import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Info from './components/Info';
import ResumeBuilder from './components/ResumeBuilder';

function App() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [schoolLocation, setSchoolLocation] = useState('');
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [jobStartDate, setJobStartDate] = useState('');
  const [jobEndDate, setJobEndDate] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="flex align-center justify-self-center m-auto p-6 bg-slate-100 w-full max-w-[1500px]">
      {/* <h1 className="inset-x-0 top-0 text-5xl pb-6">CV Generator</h1> */}
      <div className="flex gap-6">
        <div className="flex flex-col grow gap-5 max-w-[750px] flex-wrap">
          <Info
            setFname={setFname}
            setLname={setLname}
            setEmail={setEmail}
            setPhoneNum={setPhoneNum}
            setLocation={setLocation}
          />
          <Education
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setSchoolLocation={setSchoolLocation}
            setSchool={setSchool}
            setDegree={setDegree}
          />
          <Experience
            setCompanyName={setCompanyName}
            setPositionTitle={setPositionTitle}
            setJobStartDate={setJobStartDate}
            setJobEndDate={setJobEndDate}
            setJobLocation={setJobLocation}
            setDescription={setDescription}
          />
        </div>
        <div className="flex flex-auto grow w-[21cm] h-[29.7cm]">
          <ResumeBuilder
            fname={fname}
            lname={lname}
            email={email}
            phoneNum={phoneNum}
            location={location}
            startDate={startDate}
            endDate={endDate}
            schoolLocation={schoolLocation}
            school={school}
            degree={degree}
            companyName={companyName}
            positionTitle={positionTitle}
            jobStartDate={jobStartDate}
            jobEndDate={jobEndDate}
            jobLocation={jobLocation}
            description={description}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
