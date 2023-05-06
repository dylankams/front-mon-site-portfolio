import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FrontendLayout } from "./components/organisms/FrontendLayout";
import { Footer } from "./components/molecules/Footer";
import Articles from "./components/admin/Articles";
import CreateArticle from "./components/admin/CreateArticle";
import Blog from "./components/organisms/Blog";
import SingleArticle from "./components/organisms/SingleArticle";
import LoginPage from "./components/admin/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontendLayout />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/articles/:id" element={<SingleArticle />} />
          <Route path="/articles/new" element={<CreateArticle />} />
          <Route path="/admin" element={<Articles />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
