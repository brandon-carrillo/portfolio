import React from 'react'

const Navbar = () => {
  return (
        <div className="bg-body text-light">
      <header className="py-6">
        <nav>
          <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            <div className="text-lg font-bold">brandon.carrillo</div>
            <div className="hidden md:flex space-x-12 items-center">
              <a href="#" className="text-selected-text">
                Home
              </a>
              <a href="#">About Me</a>
              <a href="#">My Projects</a>
              <a href="#">
                <button className="px-6 py-2 bg-theme font-bold rounded">
                  Contact
                </button>
              </a>
            </div>
            <div className="md:hidden">
            <button>
              <svg
                width="26"
                height="18"
                viewBox="0 0 26 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
                  fill="white"
                />
              </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
