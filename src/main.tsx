import posthog from "posthog-js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./scss/root.scss";

posthog.init("phc_SeAphPD3oqnDpP4T0OVByqfbCrIn6QMNN55ucwxRuKU", {
  api_host: "https://eu.posthog.com",
});

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
