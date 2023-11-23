import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Note from "./components/Note";
import Search from "./components/Search";

function App() {
  return (
    <div className="pages">
      <div className="page">
        <Header />
        <Note />
        <Search />
        <List />
      </div>
    </div>
  );
}

export default App;
