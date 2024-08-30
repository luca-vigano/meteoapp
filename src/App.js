import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyHero from "./components/MyHero";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <header>
        <MyNav />
      </header>
      <main>
        <MyHero />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
