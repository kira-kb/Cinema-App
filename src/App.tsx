import { useState } from "react";
import "./App.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import AllRoutes from "./routes/router";

function App() {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="App dark:bg-slate-800">
      <Header search={search} setSearch={setSearch} />
      <AllRoutes searchParam={search} setSearch={setSearch} />
      <Footer />
    </div>
  );
}

export default App;
