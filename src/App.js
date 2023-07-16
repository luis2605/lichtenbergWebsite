import "./App.css";
import { Route, Routes,useLocation  } from "react-router-dom";
import Header from "./components/header/Header";
import React, { useState, useEffect } from 'react';
import { Home } from "./components/home/Home";
import { Footer } from "./components/footer/Footer";
import Cookies from 'js-cookie';
import CookieModal from '../src/components/cookies/cookieModal';
import UberUns from "./components/uberUns/UberUns";
import Aktuelles from "./components/aktuelles/Aktuelles";
import Mitglied from "./components/mitglied/Mitglied";
import Contact from "./components/contact/Contact";
import Spenden from "./components/spenden/Spenden";
import Impressum from "./components/impressum/Impressum";
import Datenschutz from "./components/datenschutz/Datenschutz";

function App() {

  /*checking for cookies  */

 
  const [showModal, setShowModal] = useState(false);
  /*rendering dyn the location to the title property  */
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("Default Title");

  const handleCloseModal = () => {
    Cookies.set('mywebsite', 'true', { expires: 365 });
    setShowModal(false);
  };

  useEffect(() => {
    const hasCookieConsent = Cookies.get('mywebsite');
    setShowModal(!hasCookieConsent);
    }
  , []);

  useEffect(() => {
    const title = getTitleFromPath(location.pathname);
    setPageTitle(title);

    // Update the document title
    document.title = `${pageTitle} | Dorfgemeinschaft Lichtenberg`; // Change "Your Website Name" to your actual website name
  }, [location.pathname, pageTitle]);


  const getTitleFromPath = (pathname) => {
    // Logic to determine the title based on the pathname
    // For example, you can use a switch statement to match different paths
    switch (pathname) {
      case "/":
        return "Home Page";
      case "/uber":
        return "Über Uns";
      case "/aktuelles":
        return "Aktuelles";
      case "/mitglied":
        return "Mitglied";
      case "/kontakt":
        return "Kontakt";
      case "/spenden":
        return "Spenden";
      case "/impressum":
        return "Impressum";
        case "/datenschutz":
          return "Datenschutz";
      // Add other cases for different paths
      default:
        return "Default Title";
    }
  };
    // scroll to the beginning of the page

    const scrollUp =()=>{
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  return (


    <div className="mega-container">

    {/* <div>
     <button onClick={handleSetCookie}>Set Cookie</button>
      <button onClick={handleGetCookie}>Get Cookie</button>
      <button onClick={handleRemoveCookie}>Remove Cookie</button>

      {cookieValue && <p>Cookie Value: {cookieValue}</p>} 
      </div>   */}


      {showModal && (
        <div className="overlay">
          <CookieModal handleClose={handleCloseModal} />
        </div>
      )}


<Header></Header>
    
    
    
      <Routes>
      
        <Route path="/" element={<Home />}></Route>
        <Route path="/uber" element={<UberUns />}></Route>
        <Route path="/aktuelles" element={<Aktuelles />}></Route>
        <Route path="/mitglied" element={<Mitglied />}></Route>
        <Route path="/kontakt" element={<Contact />}></Route>
        <Route path="/spenden" element={<Spenden />}></Route>
        <Route path="/impressum" element={<Impressum />}></Route>
        <Route path="/datenschutz" element={<Datenschutz />}></Route>
      
      </Routes>
      <Footer></Footer>
    </div>
  );

  /* testing  */
}

export default App;
