export default function ResumeBuilder({
  fname,
  lname,
  email,
  phoneNum,
  location,
  startDate,
  endDate,
  schoolLocation,
  school,
  degree,
  companyName,
  positionTitle,
  jobStartDate,
  jobEndDate,
  jobLocation,
  description,
}) {
  return (
    <div className="flex flex-col w-full bg-white">
      <div className="flex flex-col bg-teal-800 text-white h-32 justify-center">
        <h1 className="justify-center pb-2 text-4xl font-bold">
          {fname} {lname}
        </h1>
        <div className="flex flex-row justify-center gap-10 font-bold">
          <div className="">{email}</div>
          <div className="">{phoneNum}</div>
          <div className="">{location}</div>
        </div>
      </div>
      <div className="flex flex-col p-10">
        <>
          <span className="bg-slate-100 font-bold text-2xl p-1 text-teal-900">
            Education
          </span>
          <div className="flex flex-row text-l gap-10 text-left py-6">
            <div className="flex flex-col max-w-36 w-full">
              <div>
                {startDate} {startDate ? '-' : ''} {endDate}
              </div>
              <div>{schoolLocation}</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold">{school}</div>
              <div>{degree}</div>
            </div>
          </div>
        </>
        <>
          <div className="flex flex-col">
            <span className="bg-slate-100 font-bold text-2xl p-1 text-teal-900">
              Professional Experience
            </span>
            <div className="flex flex-row text-l gap-10 text-left py-6">
              <div className="flex flex-col max-w-36 w-full">
                <div>
                  {jobStartDate} {jobStartDate ? '-' : ''} {jobEndDate}
                </div>
                <div>{jobLocation}</div>
              </div>
              <div className="flex flex-col">
                <div className="font-bold">{companyName}</div>
                <div>{positionTitle}</div>
                <div>{description}</div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
