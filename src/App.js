import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" />
            <Route path="/login" />
            <Route path="/register" />
          </Routes>
        </div>
      </Router>
    </>
  );
}
