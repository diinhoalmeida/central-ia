import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";

type SelectButtonProps = {
  type: "ia" | "category";
  label: string;
  options: string[];
  onSelect: (option: string) => void;
  showBorder?: boolean;
  ariaLabel?: string;
  description?: string;
};

export function SelectButton({
  type,
  label,
  options,
  onSelect,
  showBorder = true,
  ariaLabel,
  description,
}: SelectButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonId = `${type}-select-${label.toLowerCase().replace(/\s+/g, '-')}`;
  const listboxId = `${buttonId}-listbox`;

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
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
    <div
      className={`${type === "ia" && showBorder ? "hidden" : ""} ls-1:block relative ${!showBorder && "ls-1:hidden"}`}
      ref={dropdownRef}
      role="presentation"
    >
      <button
        id={buttonId}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-label={ariaLabel || `Select ${type === "category" ? "category" : "AI model"}`}
        className={`flex items-center justify-between p-3 bg-white ${
          showBorder ? "border border-gray-300 rounded-lg" : ""
        } shadow-sm hover:bg-gray-100 w-[200px] transition-colors duration-300 ease-in-out`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        {type === "category" ? (
          <>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 flex">Categoria</span>
              <span className="font-medium text-gray-700">{selectedOption}</span>
            </div>
          </>
        ) : (
          <>
            <div
              className={`${
                !showBorder ? "hidden" : ""
              } flex items-center justify-center w-10 h-10 rounded-full bg-chatGptColor`}
              aria-hidden="true"
            >
              <SiOpenai className="text-white" />
            </div>

            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-700">{selectedOption}</span>
            </div>
          </>
        )}
        <FaChevronDown 
          className="text-gray-500 ml-2" 
          aria-hidden="true"
        />
      </button>
      
      {isOpen && (
        <div
          id={listboxId}
          role="listbox"
          aria-label={description || `Available ${type === "category" ? "categories" : "AI models"}`}
          className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg w-full"
          tabIndex={-1}
        >
          {options.map((option, index) => (
            <div
              key={index}
              role="option"
              aria-selected={option === selectedOption}
              tabIndex={0}
              className="block text-left w-full px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelectedOption(option);
                onSelect(option);
                setIsOpen(false);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedOption(option);
                  onSelect(option);
                  setIsOpen(false);
                }
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