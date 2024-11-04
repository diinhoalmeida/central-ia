import { Route, Routes } from "react-router-dom";
import { ChatScreen } from "./pages/ChatScreen";
import { Home } from "./pages/Home/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";

export function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route element={<ProtectedRoute redirectTo="/home" />}>
        <Route path="/chat" element={<ChatScreen />} />
      </Route>
    </Routes>
  );
}
