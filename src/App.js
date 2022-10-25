import "./App.scss";
import Footer from "./shared/components/Footer/Footer";
import Navbar from "./shared/components/Navbar/Navbar";
import { Suspense } from "react";
import { HashRouter as Router } from "react-router-dom";
import AppRoutes from "./config/routes/AppRoutes";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Suspense
          fallback={
            //Message showed on component loading
            <div className="loading-msg">
              <h1>Loading...</h1>
            </div>
          }
        >
          <AppRoutes />
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
