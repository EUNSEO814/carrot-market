const GroupModifiers = () => {
  return (
    <>
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-3  ">
        {["emma", "Me", "you", "yourself", ""].map((person, index) => (
          <div key={index} className="flex items-center gap-5 group">
            <div className="size-10 bg-blue-400 rounded-full" />
            <span className="text-lg font-medium empty:w-24 empty:h-5 empty:rounded-full empty:animate-pulse empty:bg-gray-300 group-hover:text-red-500">
              {person}
            </span>
            <div className="size-6 bg-red-500 text-white flex items-center justify-center rounded-full relative ">
              <span className="z-10">{index}</span>
              <div className="size-6 bg-red-500 rounded-full absolute animate-ping" />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-3  ">
        <div className="group flex flex-col">
          <input
            className="bg-gray-100 w-full"
            placeholder="Write your email"
          />
          <span className="group-focus-within:block hidden">
            Make sure it is a valid email...
          </span>
          <button>Submit</button>
        </div>
      </div>
    </>
  );
};

export default GroupModifiers;
