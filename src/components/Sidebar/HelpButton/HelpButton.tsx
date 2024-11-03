import { FaQuestionCircle } from "react-icons/fa";

export function HelpButton() {
  return (
    <button
      type="button"
      aria-label="Open help section"
      title="Open help"
      className="flex gap-3 items-center py-2 px-3 hover:bg-gray-100 transition-colors duration-300 ease-in-out rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
    >
      <FaQuestionCircle
        className="text-gray-700"
        aria-hidden="true"
        role="img"
      />
      <span className="sr-only md:not-sr-only">Ajuda</span>
    </button>
  );
}
