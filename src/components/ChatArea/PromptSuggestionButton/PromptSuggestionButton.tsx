import { FaPlus } from "react-icons/fa";

type PromptSuggestionButtonProps = {
  text: string;
  onClick: (suggestion: string) => void;
};

function PromptSuggestionButton({
  text,
  onClick,
}: PromptSuggestionButtonProps) {
  return (
    <button
      onClick={() => onClick(text)}
      className="flex items-center justify-center border border-borderPromptSuggestion bg-white rounded-full p-2 text-colorLightGray 
            hover:text-colorNeutralDarkGray hover:border-colorNeutralDarkGray 
            transition-colors duration-300 ease-in-out"
    >
      <FaPlus className="mr-2" />
      <span className="truncate">{text}</span>
    </button>
  );
}

export function PromptSuggestionButtons({
  onSuggestionClick,
}: {
  onSuggestionClick: (suggestion: string) => void;
}) {
  const prompts = [
    "Primeira sugestão de prompt",
    "Segunda sugestão de prompt",
    "Terceira sugestão de prompt",
    "Quarta sugestão de prompt",
  ];

  return (
    <div className="overflow-x-auto mb-4 flex space-x-4 py-2 justify-between">
      {prompts.map((prompt, index) => (
        <PromptSuggestionButton
          key={index}
          text={prompt}
          onClick={onSuggestionClick}
        />
      ))}
    </div>
  );
}
