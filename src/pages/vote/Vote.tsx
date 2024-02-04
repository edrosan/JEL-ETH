import { GearApi } from "@gear-js/api";
import { useEffect, useState } from "react";
import { useAccount } from "@gear-js/react-hooks";
import { Link } from "react-router-dom";




function Survey({ isActive, src, alt, title, description }: { isActive: boolean, src: string, alt: string, title: string, description: string }) {
  return (
    <div className="max-w-sm  bg-white  border border-gray-200 rounded-lg shadow ">
      <div className="h-[200px]">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={src}
          alt={alt}
        />
      </div>
      <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {title}
          </h5>
        
        <p className="mb-3 font-normal text-gray-700 ">
          {description}
        </p>
        <div className="flex gap-4">

          <Link
            to={`${isActive ? '/vote/test' : ""}`}

            className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-md  ${isActive ? "bg-emerald-500  hover:bg-emerald-600 focus:ring-4 focus:ring-emerald-400" : "bg-slate-500 cursor-not-allowed"} `}
          >
            {isActive ? "vote now" : "closed"}
            {
              isActive ? <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
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
              </svg> : null
            }

          </Link>

          {
            !isActive ?
              <Link to="/vote/soda" className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-md bg-emerald-500  hover:bg-emerald-600 focus:ring-4 focus:ring-emerald-400 `}>show results</Link>
              : null
          }
        </div>
      </div>
    </div>
  );
}


function Vote() {
  return (
    <div className="w-[1200px] mx-auto flex flex-wrap gap-4">

      <Survey
        isActive
        src="https://images.unsplash.com/photo-1494172961521-33799ddd43a5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="vote"
        description="They dispute the place of your representative"
        title="Vote for your new representative" />

      <Survey
        isActive={false}
        src="https://images.unsplash.com/photo-1603968070333-58761fa00853?q=80&w=1394&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="soda"
        title="Soda is harmful to health" 
        description="The increase in soda consumption worries the health sector"
        />
      {/* <Survey isActive={false} /> */}
    </div>
  );
}

export { Vote };
