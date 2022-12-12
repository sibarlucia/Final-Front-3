
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import  Home  from "./Routes/Home";
import Detail from "./Routes/Detail"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import { routes } from "./Routes";
import NotFound from "./Components/NotFound";


function App() {

  const {home, contact, favs, detail} = routes
  return (
      <div className="App">
          <Navbar/>
            <Routes>

              <Route path={home.path} element={<Home/>}/>

              <Route path={`${detail.path}/:id`} element={<Detail/>} />
            
              <Route path={contact.path} element={<Contact/>} />

              <Route path={favs.path} element={<Favs/>} />

              <Route path="*"  element={<NotFound/>} />
            </Routes>

          
          <Footer/>
      </div>
  );
}

export default App;
