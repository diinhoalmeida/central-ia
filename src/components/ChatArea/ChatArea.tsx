import { HTMLAttributes, useState } from "react";
import { SelectButton } from "./SelectButton";
import { MessageInput } from "./MessageInput";
import { MessageList } from "./MessageList";
import { PromptSuggestionButtons } from "./PromptSuggestionButton";

interface ChatAreaProps extends HTMLAttributes<HTMLElement> {
  optionIa?: string;
  optionCategory?: string;
}

export function ChatArea({
  optionCategory = "Escolha uma Categoria",
  optionIa = "Escolha uma IA",
}: ChatAreaProps) {
  const [message, setMessage] = useState<string>("");
  const [iaOption, setIaOption] = useState<string>(optionIa);
  const [categoryOption, setcategoryOption] = useState<string>(optionCategory);
  const aiOptions = ["ChatGPT", "Bard", "Claude", "Jasper"];
  const categories = ["Desenvolvimento", "Design", "Marketing", "Dados"];

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
  };

  const handleSelectIa = (option: string) => {
    setIaOption(option);
  };
  const handleSelectCategory = (option: string) => {
    setcategoryOption(option);
  };

  return (
    <main className="bg-white p-6 overflow-y-auto flex flex-col w-full">
      <div className="flex mb-6 flex-row gap-4 ls-1:justify-normal justify-center">
        <SelectButton
          type="ia"
          label={iaOption}
          options={aiOptions}
          onSelect={handleSelectIa}
          ariaLabel="Choose a ia"
          description="List of available ia"
        />
        <SelectButton
          type="category"
          label={categoryOption}
          options={categories}
          onSelect={handleSelectCategory}
          ariaLabel="Choose a category"
          description="List of available category"
        />
      </div>

      <div className="flex-1 flex justify-center">
        <div className="h-full flex flex-col w-[60%]">
          <MessageList />
          <div className="mt-4">
            <PromptSuggestionButtons
              onSuggestionClick={handleSuggestionClick}
            />
            <MessageInput
              message={message}
              setMessage={setMessage}
              iaOption={iaOption}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
