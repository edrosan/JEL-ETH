import { GearApi } from "@gear-js/api";
import { useEffect, useState } from "react";
import { useAccount } from "@gear-js/react-hooks";
import { Link } from "react-router-dom";


function Surveys() {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <li className="me-2">
          <a
            href="/"
            className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
            aria-current="page"
          >
            Dashboard
          </a>
        </li>
      </ul>
    </div>
  );
}

function Survey() {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
      <a href="/">
        <img
          className="rounded-t-lg"
          src="https://images.unsplash.com/photo-1494172961521-33799ddd43a5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Vote for your new representative
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">
          They dispute the place of your representative
        </p>
        <Link
          to="/vote/test"
          className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  bg-emerald-500 rounded-md hover:bg-emerald-600 focus:ring-4 focus:ring-emerald-400"
        >
          vote now
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
    </div>
  );
}


function Vote() {
  return (
    <div className="w-[1200px] mx-auto flex flex-col gap-4">
      <Survey />
    </div>
  );
}

export { Vote };
