import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="pageWrapper">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
