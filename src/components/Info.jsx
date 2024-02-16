import '../styles/Info.css';

export default function Info() {
  return (
    <div className="bg-white p-6 rounded-2xl drop-shadow-md">
      <h1 className="text-3xl pb-4 font-bold text-left">Personal Details</h1>
      <form action="submit" className="flex flex-col w-fit gap-3">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="first name"
            className="p-3 bg-slate-100"
          />
          <input
            type="text"
            placeholder="last name"
            className="p-3 bg-slate-100"
          />
        </div>
        <input type="text" placeholder="email" className="p-3 bg-slate-100" />
        <input
          type="text"
          placeholder="phone number"
          className="p-3 bg-slate-100"
        />
      </form>
    </div>
  );
}
