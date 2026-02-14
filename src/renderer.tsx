import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./components/root-layout";
import App from "./pages/app";

const container = document.getElementById("root");
// biome-ignore lint/style/noNonNullAssertion: <!-- Ignore because we are sure that the container element exists -->
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route index element={<RootLayout />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
