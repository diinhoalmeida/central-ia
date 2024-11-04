import { ChangeEvent, useState } from "react";
import { FaPaperclip, FaArrowUp } from "react-icons/fa";
import api from "../../../config/axiosInstance";

interface MessageInputProps {
  message: string;
  setMessage: (value: string) => void;
  iaOption: string;
}

export function MessageInput({
  message,
  setMessage,
  iaOption,
}: MessageInputProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async () => {
    if (!message.trim() || isLoading) return;

    setIsLoading(true);
    try {
      const response = await api.post(
        "/registeprompt",
        { prompt: message },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to send prompt");
      }

      setMessage("");
    } catch (error) {
      console.error("Error sending prompt:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="mt-4 flex items-center bg-[#f4f4f4] rounded-full p-2 shadow-md max-w-full">
      <button
        className="text-gray-500 focus:outline-none hover:text-gray-700 transition-colors"
        aria-label="Anexar Arquivo"
        disabled={isLoading}
      >
        <FaPaperclip size={20} />
      </button>

      <input
        type="text"
        placeholder={`Mensagem ${iaOption}`}
        value={message}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        disabled={isLoading}
        className="flex-1 bg-[#f4f4f4] rounded-full px-3 py-2 focus:outline-none text-base sm:text-sm disabled:opacity-50"
      />

      <button
        onClick={handleSubmit}
        className={`p-2 rounded-full transition-colors duration-300 ${
          message && !isLoading
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-[#d7d7d7] text-gray-500"
        }`}
        disabled={!message || isLoading}
        aria-label="Enviar Mensagem"
      >
        <FaArrowUp size={20} className={isLoading ? "animate-pulse" : ""} />
      </button>
    </div>
  );
}
