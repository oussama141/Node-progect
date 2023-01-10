import React from "react";
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import AddAnnoncePage from "./components/AddAnnoncePage";
import AnnoncePage from "./components/AnnoncePage";
import AfficheAnnonce from "./components/AfficheAnnonce";
import Lister from "./components/Lister";
import Book from "./components/Book";
import Validate from "./components/Validate";
import Footer from  "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Switch >
         <Route exact path="/" component={HomePage} />
         <Route exact path="/Login" component={Login}  />
         <Route path="/AddAnnoncePage" component={AddAnnoncePage}  />
         <Route path="/AnnoncePage" component={AnnoncePage}  />
         <Route path="/AfficheAnnonce" component={AfficheAnnonce}  />
         <Route path="/Lister/:loc/:prix" component={Lister}/>
         <Route path="/Book" component={Book}/>
         <Route path="/Validate" component={Validate}/>
         <Route path="/Footer" component={Footer}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;