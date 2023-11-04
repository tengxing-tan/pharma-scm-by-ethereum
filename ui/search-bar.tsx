'use client';

import React from 'react';

export function SearchBar() {
  return (
    <div className="focus-within:border-primary-400 mt-4 flex w-full max-w-xl  items-center gap-x-2 rounded border-2 border-transparent bg-gray-50 p-2 lg:px-5">
      <div className="text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <input
        type="search"
        name="search"
        placeholder="Searh Pharmaceutical product"
        className="w-full border-none bg-inherit text-sm font-light text-gray-700 focus:ring-0"
      />
    </div>
  );
}
