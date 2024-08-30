import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyHome from "./components/MyHome";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CityDettails from "./components/CityDettails";

function App() {
  return (
    <BrowserRouter>
      <header>
        <MyNav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MyHome />} />
          <Route path="/details/:cityId" element={<CityDettails />} />
        </Routes>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </BrowserRouter>
  );
}

export default App;
