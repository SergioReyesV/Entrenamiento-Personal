import { Route, Routes } from "solid-app-router";
import LoginPage from "../src/components/LoginPage";
import Dashboard from "./components/dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
