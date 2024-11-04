import { useState, useEffect, useRef } from "react";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { ChatArea } from "../../components/ChatArea/ChatArea";

export function ChatScreen() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsSidebarVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen" role="application" aria-label="Chat">
      <Header onMenuClick={toggleSidebar} role="banner" />
      <main className="flex flex-1">
        <Sidebar 
          ref={sidebarRef}
          isVisible={isSidebarVisible} 
          onClose={toggleSidebar} 
          role="complementary" 
          aria-label="Menu lateral" 
        />
        <ChatArea role="main" aria-label="Área de conversação" />
      </main>
    </div>
  );
}
