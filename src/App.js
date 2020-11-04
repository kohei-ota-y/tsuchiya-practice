import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Top, Company, Contact, Recruit, Stock} from './components/index'
import './assets/css/top.css'
import './assets/css/common.css'
import './assets/css/stock.css'
import './assets/css/company.css'
import './assets/css/contact.css'
import './assets/css/recruit.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path='/'　component={Top}></Route>
            <Route exact path='/company' component={Company}></Route>
            <Route exact path='/stock' component={Stock}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route exact path='/recruit' component={Recruit}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
