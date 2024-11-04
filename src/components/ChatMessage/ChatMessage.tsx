interface ChatMessageProps {
  message: string;
  isSentByUser: boolean;
}

export function ChatMessage({ message, isSentByUser }: ChatMessageProps) {
  return (
    <div
      className={`p-4 rounded-lg shadow ${
        isSentByUser ? "bg-gray-100" : "bg-blue-100"
      }`}
    >
      <p className="text-gray-700">{message}</p>
    </div>
  );
}
