import { useEffect, useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export const Cheatsheets = () => {
  const supabase = createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON
  )

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const getDownloadLink = async (filename) => {
    try {
      const { data, error } = await supabase
        .storage
        .from("cheatsheets")
        .getPublicUrl(filename, 3600);

      console.log(data);
      window.open(data.publicUrl, '_blank');
    } catch (error) {
      console.log(error);
      console.log("There was an error opening the file");
    } 
  };

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
              <a href="#about" onClick={() =>getDownloadLink('ST2334_finals.pdf')}> 
                ST2334 Finals 
              </a>
            </li>
            <li 
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <a href="#about" onClick={() =>getDownloadLink('CS2106_midterms.pdf')}> 
                CS2106 Midterms 
              </a>
            </li>
            <li 
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <a href="#about" onClick={() =>getDownloadLink('CS2106_finals.pdf')}>
                CS2106 Finals
              </a>
            </li>
            <li 
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <a href="#about" onClick={() =>getDownloadLink('CS2102_finals.pdf')}> 
                CS2102 Finals 
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}