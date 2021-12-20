import logo from "./Logo-YR-Solo.png";
import "./App.css";
import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <main>
          <Dictionary defaultKeyword="Equality" />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            This project was created by Yarelys Rivera, hosted on Netlify and is{" "}
            <a href="https://github.com/YarelysRR/dictionary-project">
              open-sourced
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
