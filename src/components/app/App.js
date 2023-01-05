import "./app.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage, Cottage, Page404, CompletedForm } from "../pages";
import ScrollToTop from "../scrollToTop/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/cottagevillage" element={<MainPage />} />
        <Route path="/#houseSelect" element={<MainPage />} />
        <Route path="/cottage/:cottageId" element={<Cottage />} />
        <Route path="/completed"  element={<CompletedForm />}/>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default App;
