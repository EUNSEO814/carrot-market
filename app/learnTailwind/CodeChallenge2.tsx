const CodeChallenge2 = () => {
  return (
    <div className="bg-white w-96 h-[760px] max-w-screen-sm p-3 overflow-hidden rounded-3xl border-solid border-4 border-black">
      <div className="flex items-center pt-5 pb-2">
        <span className="font-semibold mr-2">March 2021</span>
        <svg
          className="size-5"
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
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div className="border-b-2 border-gray-300" />
      <div className="flex flex-col justify-center items-center p-6 font-semibold">
        <span>Hello, Bruno!</span>
        <span>Your medicines for today</span>
      </div>
      <div className="flex justify-around items-center *:px-3 *:py-2">
        <div>
          <div className="text-2xl font-semibold pb-3">16</div>
          <div className="text-[10px] font-semibold text-center ">Mon</div>
        </div>
        <div>
          <div className="text-2xl font-semibold pb-3">17</div>
          <div className="text-[10px] font-semibold text-center ">Tue</div>
        </div>
        <div className="bg-[#2DA6FF] rounded-2xl">
          <div className="text-2xl font-semibold pb-3 ">18</div>
          <div className="text-[10px] font-semibold text-center ">Wed</div>
        </div>
        <div>
          <div className="text-2xl font-semibold pb-3">19</div>
          <div className="text-[10px] font-semibold text-center ">Thu</div>
        </div>
        <div>
          <div className="text-2xl font-semibold pb-3">20</div>
          <div className="text-[10px] font-semibold text-center ">Fri</div>
        </div>
        <div>
          <div className="text-2xl font-semibold pb-3">21</div>
          <div className="text-[10px] font-semibold text-center ">Sat</div>
        </div>
      </div>
      <div className="relative mt-24">
        <div className="absolute bg-[#F9DD70] w-5/6 h-52 z-10 rounded-2xl p-4 flex flex-col justify-between ">
          <div>
            <div className="text-2xl font-semibold ">Nora - BE</div>
            <div className="text-[10px] font-semibold ">
              Norenthindrone - 0.35mg
            </div>
          </div>
          <div className="text-[10px] font-semibold ">7h30AM</div>
        </div>
        <div className="absolute bg-[#2DA6FF] w-full h-52 rounded-2xl ">
          <div className="flex justify-end items-center h-full w-full">
            <svg
              className="size-7 mr-4"
              fill="none"
              strokeWidth={3}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[#68CA8F] w-full h-52 mt-80 rounded-2xl p-4 flex flex-col justify-between ">
        <div>
          <div className="text-2xl font-semibold ">Feosol</div>
          <div className="text-[10px] font-semibold ">
            Ferrous Sulfate - 600mg
          </div>
        </div>
        <div className="text-[10px] font-semibold ">9h30AM</div>
      </div>
    </div>
  );
};
export default CodeChallenge2;
