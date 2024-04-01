const StateModifiers = () => {
  return (
    <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-2 md:flex-row *:outline-none ring ring-transparent transition-shadow has-[:invalid]:ring-red-100  ">
      <input
        className="w-full rounded-full h-12 bg-gray-200 pl-5  ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
        type="text"
        placeholder="Email Address"
        required
      />
      <span className="text-red-500 font-medium hidden peer-invalid:block">
        Email is required.
      </span>
      <button className=" text-white py-2 rounded-full active:scale-90 transition-transform  md:px-10 bg-black ">
        Log in
      </button>
    </div>
  );
};

export default StateModifiers;
