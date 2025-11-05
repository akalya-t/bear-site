import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Passion from "./sections/Passion";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import AboutPage from "./Pages/AboutPage";
import BearFacts from "./sections/BearFacts";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home/>
                  <BearFacts/>
                  <Form />
                  <Passion />
                </>
              }
            />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
