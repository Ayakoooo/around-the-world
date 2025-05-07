import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Region } from "./pages/Region";
import { Header } from "./components/Header";
import { Country } from "./pages/Country";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="regions/:region" element={<Region />}></Route>
        <Route
          path="regions/:region/countries/:country"
          element={<Country />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
