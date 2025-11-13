import React, { useState } from "react";

function Profilecard({username,photo}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative bg-neutral-primary-soft max-w-xs w-full p-6 border border-default rounded-base shadow-xs mt-3 rounded-2xl">

      {/* Dropdown Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        id="dropdownButton"
        className="absolute top-2 end-2 text-body hover:text-heading bg-neutral-primary-soft box-border border border-transparent hover:bg-neutral-tertiary focus:ring-4 focus:ring-neutral-tertiary rounded-base p-1.5 focus:outline-none"
        type="button"
      >
        <span className="sr-only">Open dropdown</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="3"
            d="M6 12h.01m6 0h.01m5.99 0h.01"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
            id="dropdown"
            className="absolute top-12 right-2 z-20 w-40 rounded-xl bg-[#1e293b] shadow-xl border border-[#2b3a4e]"
        >
            <ul className="p-2 text-sm font-medium text-gray-200">
            <li>
                <a
                href="#"
                className="block px-4 py-2 rounded-lg hover:bg-[#2c3a50] hover:text-white"
                >
                Edit
                </a>
            </li>

            <li>
                <a
                href="#"
                className="block px-4 py-2 rounded-lg hover:bg-[#2c3a50] hover:text-white"
                >
                Export Data
                </a>
            </li>

            <li>
                <a
                href="#"
                className="block px-4 py-2 rounded-lg text-red-400 hover:bg-[#2c3a50] hover:text-red-300"
                >
                Delete
                </a>
            </li>
            </ul>
        </div>
        )}


      {/* Profile Content */}
      <div className="flex flex-col items-center">
        <img
          className="w-24 h-24 mb-6 rounded-full"
          src={photo}
          alt="User"
        />

        <h5 className="mb-0.5 text-xl font-semibold tracking-tight text-heading">
          {username}
        </h5>

        <span className="text-sm text-body">Cricketer</span>

        <div className="flex mt-4 md:mt-6 gap-4">
          <button
            type="button"
            className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          >
            <svg
              className="w-4 h-4 me-1.5 -ms-0.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            Follow
          </button>

          <button
            type="button"
            className="inline-flex self-start w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          >
            Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profilecard;
