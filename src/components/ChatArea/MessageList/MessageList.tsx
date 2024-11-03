import { ChatMessage } from "../../ChatMessage";


export function MessageList() {
  return (
    <div className="flex-1 overflow-y-auto flex flex-col-reverse space-y-reverse space-y-4 max-h-[600px]">
      <ChatMessage
        message="Olá! Como posso ajudar você hoje?"
        isSentByUser={false}
      />
      <ChatMessage
        message="Estou com dúvidas sobre o uso da API."
        isSentByUser={true}
      />
    </div>
  );
}
