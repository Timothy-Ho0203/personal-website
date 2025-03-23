import { useEffect, useRef, useState } from "react";

export const Cheatsheets = () => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      //document.addEventListener("scroll", handleClickOutside, true);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      //document.removeEventListener("scroll", handleClickOutside, true);
    }
  }, [isOpen]);

  return (
    <div 
      className="relative inline-block mt-2"
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white rounded py-1 px-6 transition hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/80"
      >
        View Cheatsheets
      </button>

      {isOpen && (
        <div 
          className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg"
        >
          <ul className="py-2 text-gray-700">
            <li 
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <a href="#"> 
                ST2334 Finals 
              </a>
            </li>
            <li 
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <a href="#"> 
                CS2106 Midterms 
              </a>
            </li>
            <li 
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <a href="#">
                CS2106 Finals
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}