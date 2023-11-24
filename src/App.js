import "./App.css";

import Note from "./components/Note";

import Search from "./components/Search";

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
