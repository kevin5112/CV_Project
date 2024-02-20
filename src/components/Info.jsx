import '../styles/Info.css';

export default function Info({
  setFname,
  setLname,
  setEmail,
  setPhoneNum,
  setLocation,
}) {
  function handleInput(e, setFunction) {
    // console.log(e.target.value);
    setFunction(e.target.value);
  }

  return (
    <div className="bg-white p-6 rounded-2xl drop-shadow-md">
      <form action="submit" className="flex flex-col flex-initial gap-3">
        <h1 className="text-3xl pb-4 font-bold text-left">Personal Details</h1>
        <div className="flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="first name"
            className="flex-1 p-3 bg-slate-100"
            onChange={(e) => handleInput(e, setFname)}
          />
          <input
            type="text"
            placeholder="last name"
            className="flex-1 p-3 bg-slate-100"
            onChange={(e) => handleInput(e, setLname)}
          />
        </div>
        <input
          type="text"
          placeholder="email"
          className="p-3 bg-slate-100"
          onChange={(e) => handleInput(e, setEmail)}
        />
        <input
          type="text"
          placeholder="phone number"
          className="p-3 bg-slate-100"
          onChange={(e) => handleInput(e, setPhoneNum)}
        />
        <input
          type="text"
          placeholder="location"
          className="p-3 bg-slate-100"
          onChange={(e) => handleInput(e, setLocation)}
        />
      </form>
    </div>
  );
}
