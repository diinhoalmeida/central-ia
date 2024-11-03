import { ChangeEvent } from "react";
import { FaPaperclip, FaArrowUp } from "react-icons/fa";

interface MessageInputProps {
  message: string;
  setMessage: (value: string) => void;
  iaOption: string;
}

export function MessageInput({ message, setMessage, iaOption }: MessageInputProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <div className="mt-4 flex items-center bg-[#f4f4f4] rounded-full p-2 shadow-md max-w-full">
      <button
        className="text-gray-500 focus:outline-none"
        aria-label="Anexar Arquivo"
      >
        <FaPaperclip size={20} />
      </button>

      <input
        type="text"
        placeholder={`Mensagem ${iaOption}`}
        value={message}
        onChange={handleInputChange}
        className="flex-1 bg-[#f4f4f4] rounded-full px-3 py-2 focus:outline-none text-base sm:text-sm"
      />

      <button
        className={`p-2 rounded-full transition-colors duration-300 ${
          message ? "bg-blue-500 text-white" : "bg-[#d7d7d7] text-gray-500"
        }`}
        disabled={!message}
        aria-label="Enviar Mensagem"
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
}
