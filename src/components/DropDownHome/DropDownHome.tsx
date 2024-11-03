import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

type StyledDropdownButtonProps = {
  label: string;
  icon?: React.ReactNode;
  options: string[];
};

export function StyledDropdownButton({
  label,
  icon,
  options,
}: StyledDropdownButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center justify-between py-2 px-2 rounded-lg bg-white hover:bg-gray-100 transition-colors duration-300 ease-in-out"
        onClick={toggleDropdown}
      >
        <div className="flex flex-row items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full">
            {icon}
          </div>

          <span className="font-bold text-gray-700">{label}</span>
        </div>
        <FaChevronDown className="text-gray-500 ml-2" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg w-full">
          {options.map((option, index) => (
            <div
              key={index}
              className="block text-left w-full px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                console.log(`Selecionado: ${option}`);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
