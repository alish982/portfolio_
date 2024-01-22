import React from "react";
import Link from 'next/link'
const links = ["Education ", "About"];
const Header = () => {
  return (
    <nav className="bg-gray-500 hover:bg-fuchsia-400 flex justify-between item-center h-20 p-6 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
      <p className="text-yellow-50 ml-4 font-semibold text-2xl mr-auto hover:bg-slate-600 hover:rounded-md active:bg-slate-900 ">
        <Link href="/" className = " focus:ring  focus:ring-green-700 focus:rounded-md  ">Portfolio</Link>
      </p>
      <ul className="flex gap-6 list-none text-gray-200">
        {links.map((link) => (
          <li key={link}>
            <Link
              href={link.toLowerCase()}
              className=" p-2 hover:bg-slate-500 hover:rounded-md active:bg-slate-900 focus:ring focus:rounded-md focus:ring-green-500"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
