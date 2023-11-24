import "./App.css";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  return (
    <div className="pages">
      <div className="page">
        <Header />
        <Note />
      </div>
    </div>
  );
}

export default App;
