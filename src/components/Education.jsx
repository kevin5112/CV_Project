export default function Education({
  setStartDate,
  setEndDate,
  setSchoolLocation,
  setSchool,
  setDegree,
}) {
  function handleInput(e, setFunction) {
    setFunction(e.target.value);
  }

  return (
    <div className="bg-white p-6 rounded-2xl drop-shadow-md">
      <form action="submit" className="flex flex-col w-full gap-3">
        <h1 className="text-3xl pb-4 font-bold text-left">Education</h1>
        <input
          type="text"
          placeholder="School"
          className="p-3 bg-slate-100"
          onChange={(e) => handleInput(e, setSchool)}
        />
        <input
          type="text"
          placeholder="Degree"
          className="p-3 bg-slate-100"
          onChange={(e) => handleInput(e, setDegree)}
        />
        <div className="flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="Start Date"
            className="flex-1 p-3 bg-slate-100"
            maxLength="7"
            onChange={(e) => handleInput(e, setStartDate)}
          />
          <input
            type="text"
            placeholder="End Date"
            className="flex-1 p-3 bg-slate-100"
            maxLength="7"
            onChange={(e) => handleInput(e, setEndDate)}
          />
        </div>
        <input
          type="text"
          placeholder="Location"
          className="p-3 bg-slate-100"
          onChange={(e) => handleInput(e, setSchoolLocation)}
        />
      </form>
    </div>
  );
}
