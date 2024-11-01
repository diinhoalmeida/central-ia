import { Route, Routes } from "react-router-dom";
import { ChatScreen } from "./pages";

export function Router() {
  return (
    <Routes>
        <Route path="/chat" element={<ChatScreen />} />
    </Routes>
  );
}
