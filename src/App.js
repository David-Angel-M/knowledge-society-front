import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Nav";
import List from "./List";
import CreateUpdate from "./CreateUpdate";
import Footer from "./Footer";
import "./btn.css";
import "./wrapper.css";
import "./navBar.css";
import "./footer.css";
import "./forms.css";

function App() {
  return (
    <div>
      <NavBar />
      <div className="content-general">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List />}></Route>
            <Route path="/post/create" element={<CreateUpdate />}></Route>
            <Route path="/post/edit/:Id" element={<CreateUpdate />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
