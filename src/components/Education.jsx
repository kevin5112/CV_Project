export default function Education() {
  return (
    <div className="bg-white p-6 rounded-2xl drop-shadow-md">
      <h1 className="text-3xl pb-4 font-bold text-left">Education</h1>
      <form action="submit" className="flex flex-col w-fit gap-3">
        <input type="text" placeholder="School" className="p-3 bg-slate-100" />
        <input type="text" placeholder="Degree" className="p-3 bg-slate-100" />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Start Date"
            className="p-3 bg-slate-100"
          />
          <input
            type="text"
            placeholder="End Date"
            className="p-3 bg-slate-100"
          />
        </div>
        <input
          type="text"
          placeholder="Location"
          className="p-3 bg-slate-100"
        />
      </form>
    </div>
  );
}
