import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Top, Company, Contact, Recruit} from './components/index'
import './assets/css/top.css'
import './assets/css/common.css'
import './assets/css/company.css'
import './assets/css/contact.css'
import './assets/css/recruit.css'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path='/'><Top /></Route>
            <Route exact path='/company'><Company /></Route>
            <Route exact path='/contact'><Contact /></Route>
            <Route exact path='/recruit'><Recruit /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
