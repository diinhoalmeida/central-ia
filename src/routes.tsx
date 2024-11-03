import { Route, Routes } from "react-router-dom";
import { ChatScreen } from "./pages/ChatScreen";
import { Home } from "./pages/Home/Home";

export function Router() {
  return (
    <Routes>
        <Route path="/chat" element={<ChatScreen />} />
        <Route path="/home" element={<Home />} />
    </Routes>
  );
}
