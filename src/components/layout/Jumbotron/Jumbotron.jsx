import { Link } from "react-router-dom";

function Jumbotron() {
    return (
      <div className="relative z-0 w-[1200px] h-[500px] mx-auto p-4 flex flex-col items-center justify-center rounded-3xl bg-black">
        <h1 className="relative z-0 mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Decide your future with web3
        </h1>
        <p className="z-0 mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Explore the power and security of web3 with Vara Network, one of the
          best decentralised layer-1 networks for creating innovative solutions.
        </p>
  
        <div className="relative z-10 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link
            to="/vote"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:ring-emerald-400"
          >
            Vote now
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
  
        <img
          src="https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
          className="absolute w-full h-full top-0 -z-40 object-cover rounded-3xl"
        />
        <div className="absolute w-full h-full top-0 -z-30 object-cover rounded-3xl bg-black/60 ">
          {" "}
        </div>
      </div>
    );
  }

  export { Jumbotron}