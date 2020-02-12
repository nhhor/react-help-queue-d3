import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';


function App(){
  return (
    <div className="mainApp">
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />


      </Switch>
      <style jsx>{`

      .mainApp {
        background-color: #fff;

      }




      `}</style>
    </div>
  );
}

export default App;
