import { Route, Routes, Navigate } from "react-router-dom";
import { ChatScreen } from "./pages/ChatScreen";
import { Home } from "./pages/Home/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/home" element={<Home />} />

      <Route element={<ProtectedRoute redirectTo="/home" />}>
        <Route path="/chat" element={<ChatScreen />} />
      </Route>
    </Routes>
  );
}
