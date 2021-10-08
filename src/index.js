import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Dashboard from './dashboard';
import CreateUser from './dashboard/create_user';
import EditUser from './dashboard/edit_user';
import ViewUser from './dashboard/view_user';
import Login from './login';

function LandingPage() {
  return(
    <div>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/dashboard" component={Dashboard}></Route>
      <Route exact path="/view" component={ViewUser}></Route>
      <Route exact path="/edit" component={EditUser}></Route>
      <Route exact path="/create" component={CreateUser}></Route>
      <Route exact path="/login" component={App}></Route>
    </div>
  )  
}

const rootElement = document.getElementById("root")
ReactDOM.render(<BrowserRouter><LandingPage></LandingPage></BrowserRouter>, rootElement)

// ReactDOM.render(
//   <React.StrictMode>
//     <Login></Login>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
