import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FranchiseProvider from "./providers/FranchiseProvider";

type AppProps = object;

const App: FC<AppProps> = () => {
  return (
<<<<<<< HEAD
    <FranchiseProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </FranchiseProvider>
=======
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
>>>>>>> d4ad57d (feat: footer)
  );
};

export default App;
