import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/app";

const container = document.getElementById("root");
// biome-ignore lint/style/noNonNullAssertion: <!-- Ignore because we are sure that the container element exists -->
const root = createRoot(container!);
root.render(<App />);
