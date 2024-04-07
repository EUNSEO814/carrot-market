const CodeChallenge3 = () => {
  return (
    <div className="grid grid-cols-3 gap-11 my-36 mx-32">
      <div className="w-full h-screen bg-white px-10 py-12">
        <div className="font-extrabold text-7xl mb-10">Weather</div>

        <div className="first-card">
          <div>
            <div className="font-black text-3xl">Casius</div>
            <div className="font-semibold text-sm">Mars, 12AM</div>
          </div>
          <div className="flex items-center ">
            <svg
              className="w-16 h-16"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
              ></path>
            </svg>
            <div className="font-extrabold text-5xl ml-3">85°</div>
          </div>
        </div>
        <div className="first-card bg-[#FFBD11]">
          <div>
            <div className="font-black text-3xl">Dlacria</div>
            <div className="font-semibold text-sm">Mars, 12AM</div>
          </div>
          <div className="flex items-center ">
            <svg
              className="w-16 h-16"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
              ></path>
            </svg>
            <div className="font-extrabold text-5xl ml-3">85°</div>
          </div>
        </div>
        <div className="first-card bg-[#00C6AD]">
          <div>
            <div className="font-black text-3xl">New York</div>
            <div className="font-semibold text-sm">USA, 12AM</div>
          </div>
          <div className="flex items-center ">
            <svg
              className="w-16 h-16"
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
            <div className="font-extrabold text-5xl ml-3">85°</div>
          </div>
        </div>
        <div className="first-card bg-[#F85A2B]">
          <div>
            <div className="font-black text-3xl">Zomato</div>
            <div className="font-semibold text-sm">India, 12AM</div>
          </div>
          <div className="flex items-center ">
            <svg
              className="w-16 h-16"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
              ></path>
            </svg>
            <div className="font-extrabold text-5xl ml-3">20°</div>
          </div>
        </div>

        <div>
          <svg
            className="w-20 h-20 my-0 mx-auto"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
      <div className="w-full h-screen bg-white px-10 py-12">
        <svg
          className="w-16 h-16"
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <div>
          <div className="font-bold text-lg text-center mt-3 mb-4">
            SIMPLE TAG
          </div>
          <div className="font-black text-5xl text-center">
            Work with best designers
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-14">
          <div className="second-card bg-[#FFBD11]">
            <svg
              className="w-16 h-16"
              fill="none"
              strokeWidth={1}
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
          <div className="second-card bg-[#00C6AD]">
            <svg
              className="w-16 h-16"
              fill="none"
              strokeWidth={1}
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
          <div className="second-card bg-pink-400">
            <svg
              className="w-16 h-16"
              fill="none"
              strokeWidth={1}
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
          <div className="second-card bg-[#F85A2B]">
            <svg
              className="w-16 h-16"
              fill="none"
              strokeWidth={1}
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
        </div>
        <div className="bg-blue-700 text-white text-center py-4 text-xl font-bold mt-20 rounded-2xl">
          Let` get it done
        </div>
      </div>
      <div className="w-full h-screen bg-[#FFBD11] px-10 py-10">
        <div className="flex items-center">
          <svg
            className="size-24"
            fill="white"
            strokeWidth={1.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <div className=" w-full font-black text-4xl ml-24">Friends</div>
        </div>
        <div className="flex items-center bg-white w-full h-20 border-2 border-black rounded-2xl border-b-8 mb-5">
          <input
            className="w-full outline-none appearance-none border-none placeholder:text-xl"
            placeholder="Search with love ..."
          />
          <svg
            className="size-8 mr-4"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <div className="third-card">
          <div className="avatar">
            <div className="w-20 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>

          <div>
            <div className="font-black text-2xl w-full">BillRizer</div>
            <div>Planet Designer</div>
          </div>
          <div className=" invite-card bg-[#FFBD11] ">invite</div>
        </div>
        <div className="third-card">
          <div className="avatar">
            <div className="w-20 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>

          <div>
            <div className="font-black text-2xl w-full">Genbei Yagy</div>
            <div>Planet Designer</div>
          </div>
          <div className=" invite-card bg-[#FFBD11] ">invite</div>
        </div>
        <div className="third-card">
          <div className="avatar">
            <div className="w-20 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>

          <div>
            <div className="font-black text-2xl w-full">Lancy Neo</div>
            <div>Rogue Corp</div>
          </div>
          <div className=" invite-card bg-black text-white ">invited</div>
        </div>
        <div className="third-card">
          <div className="avatar">
            <div className="w-20 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>

          <div>
            <div className="font-black text-2xl w-full">Bill Rizer</div>
            <div>Hard Corp</div>
          </div>
          <div className=" invite-card bg-[#FFBD11] ">invite</div>
        </div>
        <div className="third-card">
          <div className="avatar">
            <div className="w-20 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>

          <div>
            <div className="font-black text-2xl w-full">konami</div>
            <div>Xenon Creator</div>
          </div>
          <div className=" invite-card bg-[#FFBD11] ">invite</div>
        </div>
      </div>
    </div>
  );
};

export default CodeChallenge3;
