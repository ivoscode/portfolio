import Link from "next/link";
import React, { useState } from "react";
function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className=" header-bg z-50 md:pr-56 ">
      <div className="flex flex-wrap items-center justify-between  p-4 mx-auto md:p-8">
        <Link href="/">
          <h1 className=" ml-3 text-black no-underline">
            <span className="text-xl font-bold tracking-tight">IvosCode</span>
          </h1>
        </Link>

        <button
          className="items-center bg-white block px-3 py-2 text-black border border-black rounded sm:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } sm:block sm:items-center w-full sm:w-auto`}
        >
          {[
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/#contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link key={link.title} href={link.route}>
              <a className="block ml-20 mt-4 text-black no-underline  sm:inline-block sm:mt-0 sm:mr-10 text-xl">
                {link.title}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
