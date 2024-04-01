const Input = () => {
  return (
    <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-2 md:flex-row">
      <input
        className="w-full rounded-full h-12 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
        type="text"
        placeholder="Search here..."
      />
      <button className="bg-black bg-opacity-80 text-white py-2 rounded-full active:scale-90 transition-transform outline-none md:px-10">
        Search
      </button>
    </div>
  );
};

export default Input;
