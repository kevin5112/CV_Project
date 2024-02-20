export default function Experience({
  setCompanyName,
  setPositionTitle,
  setJobStartDate,
  setJobEndDate,
  setJobLocation,
  setDescription,
}) {
  function handleInput(e, setFunction) {
    setFunction(e.target.value);
  }

  return (
    <div className="bg-white p-6 rounded-2xl drop-shadow-md">
      <form action="submit" className="flex flex-col gap-3">
        <h1 className="text-3xl pb-4 font-bold text-left">Experience</h1>
        <input
          type="text"
          placeholder="Company Name"
          className="p-3 bg-slate-100"
          onChange={(e) => handleInput(e, setCompanyName)}
        />
        <input
          type="text"
          placeholder="Position Title"
          className="p-3 bg-slate-100"
          onChange={(e) => handleInput(e, setPositionTitle)}
        />
        <div className="flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="Start Date"
            className="flex-1 p-3 bg-slate-100"
            maxLength="7"
            onChange={(e) => handleInput(e, setJobStartDate)}
          />
          <input
            type="text"
            placeholder="End Date"
            className="flex-1 p-3 bg-slate-100"
            maxLength="7"
            onChange={(e) => handleInput(e, setJobEndDate)}
          />
        </div>
        <input
          type="text"
          placeholder="Location"
          className="p-3 bg-slate-100"
          onChange={(e) => handleInput(e, setJobLocation)}
        />
        <textarea
          rows="2"
          name="description"
          placeholder="Enter description..."
          className="p-3 bg-slate-100"
          onChange={(e) => handleInput(e, setDescription)}
        />
      </form>
    </div>
  );
}
