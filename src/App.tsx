import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FranchiseProvider from "./providers/FranchiseProvider";

type AppProps = object;

const App: FC<AppProps> = () => {
  return (
    <FranchiseProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </FranchiseProvider>
  );
};

export default App;
